package com.yc.GreenHouse.web.handler;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.yc.GreenHouse.entity.Adm;
import com.yc.GreenHouse.entity.CommonUser;
import com.yc.GreenHouse.entity.Good;
import com.yc.GreenHouse.entity.GoodType;
import com.yc.GreenHouse.entity.PaginationBean;
import com.yc.GreenHouse.service.AdmService;

@Controller
@RequestMapping("/adm")
@SessionAttributes("user")
public class AdmHandler {
	
	@Autowired
	private AdmService admService;
	
	@RequestMapping("/AdmLogin")
	public String AdmLogin(Adm adm,ModelMap map){
		LogManager.getLogger().debug("请求AdmHandler处理AdmLogin进来了");
		adm=admService.login(adm);
		if (adm!=null) {
			map.put("user", adm);
			return "redirect:/page/admin.jsp";
		}
		map.put("errorMsg", "用户名或密码错误!");
		return "forward:/manager_login.jsp";
	}
	
	@RequestMapping("/showGoodInfo")
	@ResponseBody
	public PaginationBean<Good> list(String page,String rows){
	//public PaginationBean<Good> list(String currPage,String pageSize){
		//System.out.println(currPage + "," + pageSize);
		LogManager.getLogger().debug("请求AmdHandler处理list进来了");
		PaginationBean<Good> userBean =  admService.listPartGoods(page,rows);
		return userBean;
	}
	
	@RequestMapping("/showUserInfo")
	@ResponseBody
	public PaginationBean<CommonUser> listUserInfo(String page,String rows){
		LogManager.getLogger().debug("请求AmdHandler处理showUserInfo进来了");
		PaginationBean<CommonUser> userInfoBean =  admService.listUserInfo(page,rows);
		return userInfoBean;
	}
	
	@RequestMapping("/showGoodType")
	@ResponseBody
	public PaginationBean<GoodType> listGoodType(String page,String rows){
		LogManager.getLogger().debug("请求AmdHandler处理listGoodType进来了");
		PaginationBean<GoodType> userInfoBean =  admService.listGoodType(page,rows);
		return userInfoBean;
	}
	
	
	@RequestMapping("/addGoodType")
	@ResponseBody
	public boolean addGoodType(GoodType goodType){
		LogManager.getLogger().debug("请求AdmHandler处理addGoodType进来了");
		System.out.println(goodType);
		goodType=admService.checkGoodType(goodType);
		System.out.println(goodType+"后来");
		if (goodType != null) {
			return	false;
		}
		
		int result=admService.addGoodType(goodType);
		if (result!=0) {
			return	true;
		}
		return	false;
	}
	
}
