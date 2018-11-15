package com.eg.bill.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.eg.bill.model.Bill;

public interface BillDao extends JpaRepository<Bill, Integer> {
	
	

}
