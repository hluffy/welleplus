package com.welleplus.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.welleplus.entity.Fence;
import com.welleplus.result.Result;
import com.welleplus.server.FenceServer;
import com.welleplus.server.WarningServer;

@Controller
@RequestMapping("fence")
public class FenceController {
	@Resource
	private FenceServer fenceServer;
	
	@Resource
	private WarningServer warningServer;
	
	@RequestMapping("addinfo.do")
	@ResponseBody
	public Result addFenceInfo(@RequestBody Fence info){
		Result result = new Result();
		Long pid = info.getPid();
		result = fenceServer.getFenceInfoFromPid(pid);
		if(result.getData()!=null){
			result.setState(false);
			result.setMessage("电子围栏已存在");
			return result;
		}
		if(info.getStartDate().isEmpty()){
			info.setStartDate(null);
		}
		if(info.getEndDate().isEmpty()){
			info.setEndDate(null);
		}
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		info.setCreatDate(sdf.format(new Timestamp(System.currentTimeMillis())));
		info.setUpdateDate(sdf.format(new Timestamp(System.currentTimeMillis())));
		if(info.getLnglat()!=null&&info.getLnglat().size()!=0){
			List<String> lnglat = info.getLnglat();
			info.setXloc((lnglat.get(0).split(","))[0]);
			info.setYloc(lnglat.get(0).split(",")[1]);
			info.setXloc1(lnglat.get(1).split(",")[0]);
			info.setYloc1(lnglat.get(1).split(",")[1]);
			info.setXloc2(lnglat.get(2).split(",")[0]);
			info.setYloc2(lnglat.get(2).split(",")[1]);
			info.setXloc3(lnglat.get(3).split(",")[0]);
			info.setYloc3(lnglat.get(3).split(",")[1]);
		}
		result = fenceServer.addFenceInfo(info);
		return result;
	}
	
	@RequestMapping("updateinfo.do")
	@ResponseBody
	public Result updateFenceInfo(@RequestBody Fence info){
		Result result = new Result();
		Long pid = info.getPid();
		result = fenceServer.getFenceInfoFromPid(pid);
		if(result.getData()==null){
			result.setState(false);
			result.setMessage("电子围栏不存在");
			return result;
		}
		if(info.getStartDate().isEmpty()){
			info.setStartDate(null);
		}
		if(info.getEndDate().isEmpty()){
			info.setEndDate(null);
		}
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		info.setUpdateDate(sdf.format(new Timestamp(System.currentTimeMillis())));
		if(info.getLnglat()!=null&&info.getLnglat().size()!=0){
			List<String> lnglat = info.getLnglat();
			info.setXloc((lnglat.get(0).split(","))[0]);
			info.setYloc(lnglat.get(0).split(",")[1]);
			info.setXloc1(lnglat.get(1).split(",")[0]);
			info.setYloc1(lnglat.get(1).split(",")[1]);
			info.setXloc2(lnglat.get(2).split(",")[0]);
			info.setYloc2(lnglat.get(2).split(",")[1]);
			info.setXloc3(lnglat.get(3).split(",")[0]);
			info.setYloc3(lnglat.get(3).split(",")[1]);
		}
		result = fenceServer.updateFenceInfoFromPid(info);
		return result;
	}
	
	@RequestMapping("getinfofrompid.do")
	@ResponseBody
	public Result getFenceInfoFromPid(Long pid){
		Result result = new Result();
		result = fenceServer.getFenceInfoFromPid(pid);
		return result;
	}
	
	@RequestMapping("deleteinfo.do")
	@ResponseBody
	public Result deleteFenceInfo(Long pid){
		Result result = new Result();
		result = fenceServer.deleteFenceInfo(pid);
		return result;
	}
	
	@RequestMapping("getinfofromid.do")
	@ResponseBody
	public Result getFenceInfoFromId(Long role,Long rid,Long uid,Long desc,Long descId){
		Result result = new Result();
		switch (role.intValue()) {
		case 0:
//			result = fenceServer.getFenceInfoFromFirmId(null);
//			break;
		case 1:
			if(desc == 1L){
				result = fenceServer.getFenceInfoFromFirmId(descId);
			}else if(desc == 2L){
				result = fenceServer.getFenceInfoFromCompanyId(descId, null);
			}else if(desc == 3L){
				result = fenceServer.getFenceInfoFromSectionId(descId, null);
			}else if(desc == 4L){
				result = fenceServer.getFenceInfoFromPid(descId);
				List<Fence> infos = new ArrayList<Fence>();
				Fence info = (Fence)result.getData();
				infos.add(info);
				result.setData(infos);
			}else{
				
			}
			
			break;
		case 2:
			if(desc == 1L || desc == 2L){
				result = fenceServer.getFenceInfoFromCompanyId(rid, uid);
			}else if(desc == 3L){
				result = fenceServer.getFenceInfoFromSectionId(descId, null);
			}else if(desc == 4L){
				result = fenceServer.getFenceInfoFromPid(descId);
				List<Fence> infos = new ArrayList<Fence>();
				Fence info = (Fence)result.getData();
				infos.add(info);
				result.setData(infos);
			}else{
				
			}
//			result = fenceServer.getFenceInfoFromCompanyId(rid, uid);
			break;
		case 3:
			if(desc == 1L || desc == 2L || desc == 3L){
				result = fenceServer.getFenceInfoFromSectionId(rid, uid);
			}else if(desc == 4L){
				result = fenceServer.getFenceInfoFromPid(descId);
				List<Fence> infos = new ArrayList<Fence>();
				Fence info = (Fence)result.getData();
				infos.add(info);
				result.setData(infos);
			}
//			result = fenceServer.getFenceInfoFromSectionId(rid, uid);
			break;
		case 4:
			result = fenceServer.getFenceInfoFromPid(rid);
			List<Fence> infos = new ArrayList<Fence>();
			Fence info = (Fence)result.getData();
			infos.add(info);
			result.setData(infos);
			break;

		default:
			break;
		}
		return result;
	}
	
	@RequestMapping("getcount.do")
	@ResponseBody
	public Result getCount(Long id){
		Result result = new Result();
		Map<String,Long> map = new HashMap<String,Long>();
		//查询围栏中的人数
		result = fenceServer.getCountUserInFence(id);
		map.put("userCount", result.getId());
		
		result = warningServer.getCountWarning(id);
		map.put("warningCount", result.getId());
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		result.setMessage(sdf.format(new Timestamp(System.currentTimeMillis())));
		result.setData(map);
		return result;
	}

}
