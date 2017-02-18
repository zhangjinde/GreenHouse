package com.yc.GreenHouse.entity;

import java.util.Date;

/*
 *c_id integer primary key,
	c_name varchar2(40) not null,
	c_sex varchar2(20),
	c_birthday date,
	c_pwd varchar2(100),
	c_tel varchar2(40),
	c_email varchar2(40),
	c_qq varchar2(20),
	c_addr varchar2(100)
 */
public class CommonUser {
	private Integer c_id;
	private String c_name;
	private String c_sex;
	private Date c_birthday;
	private String c_pwd;
	private String c_tel;
	private String c_email;
	private String c_qq;
	private String c_addr;
	public CommonUser() {
	}
	
	public CommonUser(String c_name, String c_pwd) {
		this.c_name = c_name;
		this.c_pwd = c_pwd;
	}
	public Integer getC_id() {
		return c_id;
	}
	public void setC_id(Integer c_id) {
		this.c_id = c_id;
	}
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getC_sex() {
		return c_sex;
	}
	public void setC_sex(String c_sex) {
		this.c_sex = c_sex;
	}
	public Date getC_birthday() {
		return c_birthday;
	}
	public void setC_birthday(Date c_birthday) {
		this.c_birthday = c_birthday;
	}
	public String getC_pwd() {
		return c_pwd;
	}
	public void setC_pwd(String c_pwd) {
		this.c_pwd = c_pwd;
	}
	public String getC_tel() {
		return c_tel;
	}
	public void setC_tel(String c_tel) {
		this.c_tel = c_tel;
	}
	public String getC_email() {
		return c_email;
	}
	public void setC_email(String c_email) {
		this.c_email = c_email;
	}
	public String getC_qq() {
		return c_qq;
	}
	public void setC_qq(String c_qq) {
		this.c_qq = c_qq;
	}
	public String getC_addr() {
		return c_addr;
	}
	public void setC_addr(String c_addr) {
		this.c_addr = c_addr;
	}
	@Override
	public String toString() {
		return "CommonUser [c_id=" + c_id + ", c_name=" + c_name + ", c_sex=" + c_sex + ", c_birthday=" + c_birthday
				+ ", c_pwd=" + c_pwd + ", c_tel=" + c_tel + ", c_email=" + c_email + ", c_qq=" + c_qq + ", c_addr="
				+ c_addr + "]";
	}
	
}
