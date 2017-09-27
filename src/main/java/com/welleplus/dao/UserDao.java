package com.welleplus.dao;

import java.util.List;
import java.util.Map;

import com.welleplus.entity.UserInfo;

public interface UserDao {
	List<UserInfo> getUserInfos();
	
	int addUserInfo(UserInfo info) throws Exception;
	
	List<UserInfo> getUserInfo(UserInfo info) throws Exception;

	/**
	 * 修改用户信息
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	int editUser(UserInfo userInfo) throws Exception;

	/**
	 * 删除用户信息
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	int delUser(Long id) throws Exception;
	
	UserInfo getUserInfoForId(Long id) throws Exception;
	
	Long getCountFromRoleAndRid(Map<String,Long> map) throws Exception;
}
