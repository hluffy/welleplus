package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.UserInfo;

public interface UserDao {
	List<UserInfo> getUserInfos();
	
	int addUserInfo(UserInfo info) throws Exception;
	
	List<UserInfo> getUserInfo(UserInfo info) throws Exception;
}
