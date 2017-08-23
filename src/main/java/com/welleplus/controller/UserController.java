package com.welleplus.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.welleplus.result.Result;
import com.welleplus.server.UserServer;

@Controller
@RequestMapping("user")
public class UserController {
	@Resource
	private UserServer userServer;
	
	@RequestMapping("getinfos.do")
	@ResponseBody
	public Result getInfos(){
		Result result = new Result();
		result = userServer.getInfos();
		return result;
	}

}
