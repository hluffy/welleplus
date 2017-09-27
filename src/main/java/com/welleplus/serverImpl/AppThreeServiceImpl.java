package com.welleplus.serverImpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.AppThreeServiceDao;
import com.welleplus.entity.FirmInfo;
import com.welleplus.entity.App_Code;
import com.welleplus.result.Result;
import com.welleplus.server.AppThreeService;
@Service
public class AppThreeServiceImpl implements AppThreeService{
@Resource
private AppThreeServiceDao appThreeServiceDao;
	@Override
	public Result getrootdataone() {
		// TODO Auto-generated method stub
				Result result = new Result();
				List<String> infos = appThreeServiceDao.getrootdataone();
				result.setData(infos);
				result.setState(true);
				result.setMessage("查询成功");
				return result;
	}

	@Override
	public Result getCompanydata(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result getCompanydataone(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result getSectordataone(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result getProjectdataone(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result getrootsurfacedata() {
		// TODO Auto-generated method stub
		Result result = new Result();
		List<App_Code> infos = appThreeServiceDao.getrootsurfacedata();
		result.setData(infos);
		result.setState(true);
		result.setMessage("查询成功");
		return result;
	}

}
