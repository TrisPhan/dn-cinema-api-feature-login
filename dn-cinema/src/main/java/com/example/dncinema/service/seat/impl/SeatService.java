package com.example.dncinema.service.seat.impl;

import com.example.dncinema.model.Seat;
import com.example.dncinema.model.ShowRoom;
import com.example.dncinema.model.ShowTime;
import com.example.dncinema.model.StatusSeat;
import com.example.dncinema.model.TypeSeat;
import com.example.dncinema.repository.seat.ISeatRepository;
import com.example.dncinema.repository.show_room.IShowRoomRepository;
import com.example.dncinema.repository.show_room.IStatusSeatRepository;
import com.example.dncinema.repository.show_room.ITypeSeatRepository;
import com.example.dncinema.repository.showtime.IShowTimeRepository;
import com.example.dncinema.service.seat.ISeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SeatService implements ISeatService {
    @Autowired
    private ISeatRepository seatRepository;

    @Autowired
    private IShowRoomRepository showRoomRepository;

    @Autowired
    private IShowTimeRepository showTimeRepository;

    @Autowired
    private IStatusSeatRepository statusSeatRepository;

    @Autowired
    private ITypeSeatRepository typeSeatRepository;

    @Override
    public List<Seat> findAllListSeatByIdShowTime(Integer id) {
        return seatRepository.findAllListSeatByIdShowTime(id);
    }

    @Override
    public void updateStatusSeatByIdShowTime(Integer id) {
        seatRepository.updateStatusSeatByIdShowTime(id);
    }

    @Override
    public void resetStatusSeatByIdShowTime(Integer id) {
        seatRepository.resetStatusSeatByIdShowTime(id);
    }

    @Override
    @Transactional
    public void createSeats(Integer idShowTime) {
        // Kiểm tra nếu show_time đã có ghế thì không chèn thêm
        List<Seat> existingSeats = seatRepository.findAllListSeatByIdShowTime(idShowTime);
        if (!existingSeats.isEmpty()) {
            throw new IllegalArgumentException("Show time này đã có ghế, không thể thêm mới.");
        }

        // Tạo các hàng ghế từ A đến G
        String[] rows = {"A", "B", "C", "D", "E", "F", "G"};

        // Lấy các giá trị mặc định từ cơ sở dữ liệu
        StatusSeat defaultStatus = statusSeatRepository.findById(2).orElse(null);
        ShowRoom defaultShowRoom = showRoomRepository.findById(1).orElse(null);
        ShowTime showTime = showTimeRepository.findById(idShowTime).orElse(null);
        TypeSeat normalTypeSeat = typeSeatRepository.findById(1).orElse(null);
        TypeSeat vipTypeSeat = typeSeatRepository.findById(2).orElse(null);

        // Kiểm tra nếu bất kỳ đối tượng nào không tồn tại trong DB
        if (defaultStatus == null || defaultShowRoom == null || showTime == null || normalTypeSeat == null || vipTypeSeat == null) {
            throw new IllegalArgumentException("Một hoặc nhiều giá trị mặc định không tìm thấy trong cơ sở dữ liệu.");
        }

        // Duyệt qua từng hàng và cột để tạo ghế
        for (String row : rows) {
            for (int col = 1; col <= 14; col++) {
                Seat seat = new Seat();
                seat.setNameSeat(row + col); // Đặt tên ghế (VD: A1, A2,...)
                seat.setSeat(defaultStatus); // Trạng thái ghế mặc định là 2
                seat.setShowRoom(defaultShowRoom); // Phòng chiếu mặc định là 1
                seat.setShowTime(showTime); // Lịch chiếu nhận từ body
                // Thiết lập loại ghế: Các ghế cột 7, 8, 9 là loại 2 (VIP), còn lại là loại 1 (Thường)
                seat.setTypeSeat((col == 7 || col == 8 || col == 9) ? vipTypeSeat : normalTypeSeat);
                seatRepository.save(seat); // Lưu ghế vào cơ sở dữ liệu
            }
        }
    }

}
