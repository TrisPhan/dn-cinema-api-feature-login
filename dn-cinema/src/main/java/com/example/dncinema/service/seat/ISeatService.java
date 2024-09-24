package com.example.dncinema.service.seat;

import com.example.dncinema.model.Seat;

import java.util.List;

public interface ISeatService {
    List<Seat> findAllListSeatByIdShowTime(Integer id);
    void updateStatusSeatByIdShowTime(Integer id);
    void resetStatusSeatByIdShowTime(Integer id);
    void createSeats(Integer idShowTime); // Bổ sung phương thức này
}
