package com.yc.GreenHouse.service;

import org.springframework.stereotype.Component;

import com.yc.GreenHouse.entity.Adm;
import com.yc.GreenHouse.entity.Good;
import com.yc.GreenHouse.entity.Orders;
import com.yc.GreenHouse.entity.PaginationBean;
import com.yc.GreenHouse.entity.Store;

@Component("admService")
public interface AdmService {

	Adm login(Adm adm);

	PaginationBean<Good> listPartGoods(String currPage, String pageSize);

	PaginationBean<Store> listPartStores(String currPage, String pageSize);

	boolean storeApply(Store store);

	PaginationBean<Orders> listPartorder(String page, String rows);

}
