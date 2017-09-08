package com.welleplus.serverImpl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.CorrelationDao;
import com.welleplus.entity.Correlation;
import com.welleplus.result.Result;
import com.welleplus.server.CorrelationServer;

@Service
public class CorrelationServerImpl implements CorrelationServer{
	@Resource
	private CorrelationDao cDao;

	public Result addCorrelationInfo(Correlation info) throws Exception {
		// TODO Auto-generated method stub
		Result result = new Result();
		int i = cDao.addCorrelationInfo(info);
		result.setId(info.getId());
		result.setState(true);
		result.setMessage("添加成功");
		return result;
	}

}
