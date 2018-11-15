package com.eg.bill.service;

import java.util.List;

import com.eg.bill.model.Bill;



public interface BillService {
	
	List<Bill> getAllBills();
	void addBill(Bill bill);

}
