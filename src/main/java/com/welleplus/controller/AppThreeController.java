package com.welleplus.controller;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.welleplus.entity.Company;
import com.welleplus.entity.UserInfo;
import com.welleplus.result.Result;
import com.welleplus.server.AppThreeService;

@Controller
@RequestMapping("drop")
public class AppThreeController {
	@Resource
	private AppThreeService appThreeService;
	//下拉
		@RequestMapping("getboxone.do")
		@ResponseBody
		public Result addCompanyInfo(@RequestBody UserInfo info){
			Result result = new Result();
			Long rid = info.getRid();
			String role = info.getRole();
			Long uid = info.getId();
			if("0".equals(role)){
				result = appThreeService.getrootdataone();
			}
			if("1".equals(role)){
				Map<String, Object> map =new HashMap<String, Object>();
				map.put("id", rid);
				result = appThreeService.getCompanydataone(map);
			}
			if("2".equals(role)){
				Map<String, Object> map =new HashMap<String, Object>();
				map.put("rid", rid);
				map.put("role", role);
				map.put("id", uid);
				result = appThreeService.getSectordataone(map);
				
			}else if("3".equals(role)){
				Map<String, Object> map =new HashMap<String, Object>();
				map.put("rid", rid);
				map.put("role", role);
				map.put("id", uid);
				result = appThreeService.getProjectdataone(map);
			}
			return result;
		}
     @RequestMapping("getsurfacedata.do")
     @ResponseBody
     public Result getsurfacedata(@RequestBody UserInfo info){
    	 Result result = new Result();
			Long rid = info.getRid();
			String role = info.getRole();
			Long uid = info.getId();
    	 if("0".equals(role)){
				result = appThreeService.getrootsurfacedata();
			}
			if("1".equals(role)){
				Map<String, Object> map =new HashMap<String, Object>();
				map.put("id", rid);
				result = appThreeService.getCompanydataone(map);
			}
			if("2".equals(role)){
				Map<String, Object> map =new HashMap<String, Object>();
				map.put("rid", rid);
				map.put("role", role);
				map.put("id", uid);
				result = appThreeService.getSectordataone(map);
				
			}else if("3".equals(role)){
				Map<String, Object> map =new HashMap<String, Object>();
				map.put("rid", rid);
				map.put("role", role);
				map.put("id", uid);
				result = appThreeService.getProjectdataone(map);
			}
			return result;
     }
	
}
