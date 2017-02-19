package com.yc.GreenHouse.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.GreenHouse.entity.Store;
import com.yc.GreenHouse.mapper.StoreMapper;
import com.yc.GreenHouse.service.StoreService;


@Service("storeService")
public class StoreServiceImpl implements StoreService{

	@Autowired
	private StoreMapper storeMapper;
	@Override
	public Store apply(Store store) {
		return storeMapper.applyStore(store);
	}

}
