package com.welleplus.server;

import java.util.Map;

import com.welleplus.result.Result;

public interface AppThreeService {

	public Result getrootdataone();

	public Result getCompanydata(Map<String, Object> map);

	public Result getCompanydataone(Map<String, Object> map);

	public Result getSectordataone(Map<String, Object> map);

	public Result getProjectdataone(Map<String, Object> map);

	public Result getrootsurfacedata();

}
