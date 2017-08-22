package com.welleplus.serverImpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.UserDao;
import com.welleplus.entity.UserInfo;
import com.welleplus.result.Result;
import com.welleplus.server.UserServer;

@Service
public class UserServerImpl implements UserServer{
	@Resource
	private UserDao userDao;

	public Result getInfos() {
		// TODO Auto-generated method stub
		Result result = new Result();
		List<UserInfo> infos = userDao.getUserInfos();
		result.setData(infos);
		result.setMessage("查询成功");
		result.setState(true);
		return result;
	}

}
