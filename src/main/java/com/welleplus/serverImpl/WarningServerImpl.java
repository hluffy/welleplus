package com.welleplus.serverImpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.WarningDao;
import com.welleplus.entity.Warning;
import com.welleplus.result.Result;
import com.welleplus.server.WarningServer;

@Service
public class WarningServerImpl implements WarningServer{
	@Resource
	private WarningDao wDao;

	@Override
	public Result getWarningInfo(Long id) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			List<Warning> infos = wDao.getWarningInfo(id);
			result.setData(infos);
			result.setState(true);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setState(false);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Result getCountWarning(Long id) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			Long count = wDao.getCountWarning(id);
			result.setId(count);
			result.setState(true);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setId(0L);
			result.setState(false);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Result getWarningInfoAsRole1(Warning info) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			List<Warning> infos = wDao.getWarningInfoAsRole1(info);
			result.setData(infos);
			result.setState(true);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setData(null);
			result.setState(false);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Result getWarningInfoAsRole2(Warning info) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			List<Warning> infos = wDao.getWarningInfoAsRole2(info);
			result.setData(infos);
			result.setState(true);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setState(false);
			result.setData(null);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Result getWarningInfoAsRole3(Warning info) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			List<Warning> infos = wDao.getWarningInfoAsRole3(info);
			result.setState(true);
			result.setData(infos);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setState(false);
			result.setData(null);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Result getWarningInfoAsRole4(Warning info) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			List<Warning> infos = wDao.getWarningInfoAsRole4(info);
			result.setState(true);
			result.setData(infos);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setState(false);
			result.setData(null);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

}
