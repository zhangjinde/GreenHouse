package com.yc.GreenHouse.service;

import org.springframework.stereotype.Component;

import com.yc.GreenHouse.entity.CommonUser;

@Component("userService")
public interface UserService {
	
	CommonUser login(CommonUser user);
}