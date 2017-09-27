package com.welleplus.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.welleplus.entity.Correlation;
import com.welleplus.entity.UserInfo;
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

	/**
	 * 添加用户信息
	 * @param info
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("addinfo.do")
	@ResponseBody
	@Transactional(value="transactionManager",rollbackFor=java.lang.Exception.class)
	public Result addUserInfo(@RequestBody UserInfo info) throws Exception{
		Result result = new Result();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		info.setCreatdate(df.format(new Timestamp(System.currentTimeMillis())));
		info.setPassword(Md5Util.md5String(info.getPassword()));
		
		if(info.getGetdate().isEmpty()){
			info.setGetdate(null);
		}

		result = userServer.addUserInfo(info);
		Long id = result.getId();
		List<Long> ids = info.getIds();
		if(ids!=null&&info.getGrade()!=null&&!("1".equals(info.getRole()))){
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

	/**
	 * 查询用户信息
	 * @param info
	 * @return
	 */
	@RequestMapping("getinfo.do")
	@ResponseBody
	public Result getUserInfo(@RequestBody UserInfo info){
		Result result = new Result();
		result = userServer.getInfo(info);
		if(result.getData()!=null&&((ArrayList)result.getData()).size()!=0){
			List<UserInfo> infos = (ArrayList)result.getData();
			for (UserInfo userInfo : infos) {
				Long id = userInfo.getId();
				Correlation cinfo = new Correlation();
				cinfo.setUid(id);
				Result cresult = corrServer.getCorrelationInfo(cinfo);
				if(cresult.getData()!=null){
					List<Correlation> cInfos = (ArrayList)cresult.getData();
					userInfo.setCorrelations(cInfos);
				}
			}
			result.setData(infos);
		}
		return result;
	}

	/**
	 * 修改用户信息
	 * @param userInfo
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping("editUser.do")
	@ResponseBody
	@Transactional(value="transactionManager",rollbackFor=java.lang.Exception.class)
	public Result editUser(@RequestBody UserInfo userInfo) throws Exception{
		Result result = new Result();
		result = userServer.editUser(userInfo);
		List<Long> ids = userInfo.getIds();
		if(ids!=null&&!("1".equals(userInfo.getRole()))){
			corrServer.deleteCorrelationInfoFromUid(userInfo.getId());
			for (Long id1 : ids) {
				Correlation co = new Correlation();
				co.setUid(userInfo.getId());
				co.setGrade((long)(Integer.valueOf(userInfo.getRole())+1));
				co.setGradeid(id1);
				result = corrServer.addCorrelationInfo(co);
			}
		}
		result.setMessage("编辑成功");
		return result;
	}
	/**
	 * 删除用户信息
	 * @param userInfo
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping("delUser.do")
	@ResponseBody
	@Transactional(value="transactionManager",rollbackFor=java.lang.Exception.class)
	public Result delUser(Long id) throws Exception{
		Result result = new Result();
		result = userServer.delUser(id);
		result = corrServer.deleteCorrelationInfoFromUid(id);
		return result;
	}
	/**
	 * 登录
	 * @param info
	 * @return
	 */
	@RequestMapping("login.do")
	@ResponseBody
	public Result login(UserInfo info){
		Result result = new Result();
		if(info.getUserName()==null||info.getUserName().isEmpty()
				||info.getPassword()==null||info.getPassword().isEmpty()){
			result.setState(false);
			result.setMessage("参数不能为空");
			return result;
		}
		
		info.setPassword(Md5Util.md5String(info.getPassword()));
		
		result = userServer.getInfo(info);
		return result;
	}

}
