package com.welleplus.serverImpl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.FirmDao;
import com.welleplus.entity.FirmInfo;
import com.welleplus.result.Result;
import com.welleplus.server.FirmServer;

@Service
public class FirmServerImpl implements FirmServer{
	@Resource
	private FirmDao firmDao;

	public Result getFirmInfo(Long id) {
		// TODO Auto-generated method stub
		Result result = new Result();
		FirmInfo info = firmDao.getFirmInfo(id);
		result.setData(info);
		result.setState(true);
		result.setMessage("查询成功");
		return result;
	}

}
