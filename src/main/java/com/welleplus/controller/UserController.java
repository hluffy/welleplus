package com.welleplus.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.welleplus.entity.Correlation;
import com.welleplus.entity.UserInfo;
import com.welleplus.enums.Role;
import com.welleplus.result.Result;
import com.welleplus.server.CorrelationServer;
import com.welleplus.server.UserServer;
import com.welleplus.util.Md5Util;

@Controller
@RequestMapping("user")
public class UserController {
	@Resource
	private UserServer userServer;
	
	@Resource
	private CorrelationServer corrServer;
	
	@RequestMapping("getinfos.do")
	@ResponseBody
	public Result getInfos(){
		Result result = new Result();
		result = userServer.getInfos();
		return result;
	}
	
	@RequestMapping("addinfo.do")
	@ResponseBody
	@Transactional(value="transactionManager",rollbackFor=java.lang.Exception.class)
	public Result addUserInfo(@RequestBody UserInfo info) throws Exception{
		Result result = new Result();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		info.setCreatdate(df.format(new Timestamp(System.currentTimeMillis())));
		info.setPassword(Md5Util.md5String(info.getPassword()));
//		if(info.getRole().equals(Role.PROMANAG.getName())){
//			info.setRole(String.valueOf(Role.PROMANAG.getValue()));
//		}else if(info.getRole().equals(Role.BIDMANAG.getName())){
//			info.setRole(String.valueOf(Role.BIDMANAG.getValue()));
//		}else if(info.getRole().equals(Role.PROJECTMANAG.getName())){
//			info.setRole(String.valueOf(Role.PROJECTMANAG.getValue()));
//		}else if(info.getRole().equals(Role.DEPAMANAG.getName())){
//			info.setRole(String.valueOf(Role.DEPAMANAG.getValue()));
//		}else{
//			info.setRole(String.valueOf(Role.GENSTAFF.getValue()));
//		}
		
		result = userServer.addUserInfo(info);
		Long id = result.getId();
		List<Long> ids = info.getIds();
		if(ids!=null){
			for (Long id1 : ids) {
				Correlation co = new Correlation();
				co.setUid(id);
				co.setGrade(info.getGrade());
				co.setGradeid(id1);
				
				result = corrServer.addCorrelationInfo(co);
				
			}
		}
		return result;
	}
	
	@RequestMapping("getinfo.do")
	@ResponseBody
	public Result getUserInfo(@RequestBody UserInfo info){
		Result result = new Result();
		result = userServer.getInfo(info);
		return result;
	}

}
