package com.example.dncinema.service.tickketManagement.impl;

import com.example.dncinema.dto.CustomerPointDTO;
import com.example.dncinema.dto.ICustomerPoint;
import com.example.dncinema.dto.ITicketManagement;
import com.example.dncinema.model.Ticket;
import com.example.dncinema.repository.ITicketRepositoryDong;
import com.example.dncinema.repository.ITicketManagementRepository;
import com.example.dncinema.service.tickketManagement.ITicketManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class TicketManagementService implements ITicketManagementService {

    @Autowired
    private ITicketManagementRepository iTicketManagementRepository;

    @Autowired
    private ITicketRepositoryDong iTicketRepositoryDong;

    @Override
    public Page<ITicketManagement> findAllCustomerTicket(Pageable pageable) {
        return iTicketManagementRepository.findCustomerByTicket(pageable);
    }

    @Override
    public Page<ITicketManagement> findAllCustomerTicketByUsername(String username, Pageable pageable) {
        // Triển khai phương thức để tìm vé theo username
        return iTicketManagementRepository.findByUsername(username, pageable);
    }

    @Override
    public Page<ICustomerPoint> findAllCustomerPoint(Pageable pageable) {
        return iTicketManagementRepository.findAllCustomerPointHistory(pageable);
    }

    @Override
    public Page<ICustomerPoint> searchPlusPoint(Pageable pageable, LocalDate dateStart, LocalDate dateEnd) {
        return iTicketManagementRepository.findAllPlusPoint(pageable, dateStart, dateEnd);
    }

    @Override
    public Ticket findById(Integer id) {
        return iTicketRepositoryDong.findById(id).orElse(null);
    }

    @Override
    public void delete(Integer id) {
        iTicketRepositoryDong.deleteById(id);
    }
}
