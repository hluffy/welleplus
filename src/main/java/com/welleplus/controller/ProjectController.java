package com.welleplus.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.xml.ws.RequestWrapper;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.welleplus.entity.Company;
import com.welleplus.entity.DownMenuInfo;
import com.welleplus.entity.FirmInfo;
import com.welleplus.entity.Project;
import com.welleplus.entity.Section;
import com.welleplus.entity.TreeInfo;
import com.welleplus.result.Result;
import com.welleplus.server.CompanyServer;
import com.welleplus.server.FirmServer;
import com.welleplus.server.ProjectServer;
import com.welleplus.server.SectionServer;

@Controller
@RequestMapping("project")
public class ProjectController {
	@Resource
	private FirmServer firmServer;
	
	@Resource
	private CompanyServer companyServer;
	
	@Resource
	private SectionServer sectionServer;
	
	@Resource
	private ProjectServer projectServer;
	
	
	
	//树形结构
	@RequestMapping("gettree.do")
	@ResponseBody
	public List<TreeInfo> getTreeInfos(){
		int id = 1;
		int pId = 1;
		List<TreeInfo> infos = new ArrayList<TreeInfo>();
		long fid = 1;
		Result result = firmServer.getFirmInfo(fid);
		if(result.getData()!=null){
			TreeInfo info = new TreeInfo();
			info.setId(id);
			FirmInfo firmInfo = (FirmInfo)result.getData();
			info.setName(firmInfo.getName());
			info.setDesc(Integer.parseInt(firmInfo.getGrade()));
			info.setDescId(firmInfo.getId());
			infos.add(info);
			id++;
			
			result = companyServer.getCompanyInfo(firmInfo.getId());
			if(result.getData()!=null){
				List<Company> companys = (ArrayList<Company>)result.getData();
				for (Company company : companys) {
					TreeInfo cInfo = new TreeInfo();
					cInfo.setName(company.getName());
					cInfo.setDesc(Integer.parseInt(company.getGrade()));
					cInfo.setDescId(company.getId());
					cInfo.setId(id);
					cInfo.setpId(pId);
					infos.add(cInfo);
					
//					pId = id;
					id++;
					result = sectionServer.getSectionInfo(company.getId());
					if(result.getData()!=null){
						int sid = id-1;
						List<Section> sections = (ArrayList<Section>)result.getData();
						for (Section section : sections) {
							TreeInfo sInfo = new TreeInfo();
							sInfo.setName(section.getName());
							sInfo.setDesc(Integer.parseInt(section.getGrade()));
							sInfo.setDescId(section.getId());
							sInfo.setId(id);
							sInfo.setpId(sid);
							infos.add(sInfo);
							id++;
							
							result = projectServer.getProjectInfo(section.getId());
							if(result.getData()!=null){
								int prid = id-1;
								List<Project> projects = (ArrayList<Project>)result.getData();
								for (Project project : projects) {
									TreeInfo pInfo = new TreeInfo();
									pInfo.setName(project.getName());
									pInfo.setDesc(Integer.parseInt(project.getGrade()));
									pInfo.setDescId(project.getId());
									pInfo.setId(id);
									pInfo.setpId(prid);
									infos.add(pInfo);
									id++;
								}
							}
							
						}
					}
					
					
					
				}
			}
			
		}
		
		
		return infos;
	}
	
	//添加项目组
	@RequestMapping("addinfo.do")
	@ResponseBody
	public Result addProjectInfo(@RequestBody Project info){
		Result result = new Result();
		info.setCreatDate(new Timestamp(System.currentTimeMillis()));
		result = projectServer.addProjectInfo(info);
		return result;
	}
	
	//获取下级信息
	@RequestMapping("getdownmenu.do")
	@ResponseBody
	public Result getDownMenu(Long desc,Long descId){
		Result result = new Result();
		List<DownMenuInfo> infos = new ArrayList<DownMenuInfo>();
		if(desc==null||descId==null){
			result.setState(false);
			result.setMessage("参数为空");
			return result;
		}
		
		switch (desc.intValue()) {
		case 1:
			result = companyServer.getCompanyInfo(descId);
			List<Company> companys = (ArrayList<Company>)result.getData();
			for (Company company : companys) {
				DownMenuInfo info = new DownMenuInfo();
				info.setId(company.getId());
				info.setName(company.getName());
				info.setGrade((long)2);
				
				infos.add(info);
			}
			result.setData(infos);
			break;
			
		case 2:
			result = sectionServer.getSectionInfo(descId);
			List<Section> sections = (ArrayList<Section>)result.getData();
			for (Section section : sections) {
				DownMenuInfo info = new DownMenuInfo();
				info.setId(section.getId());
				info.setName(section.getName());
				info.setGrade((long)3);
				
				infos.add(info);
			}
			result.setData(infos);
			break;
			
		case 3:
			result = projectServer.getProjectInfo(descId);
			List<Project> projects = (ArrayList<Project>)result.getData();
			for (Project project : projects) {
				DownMenuInfo info = new DownMenuInfo();
				info.setId(project.getId());
				info.setName(project.getName());
				info.setGrade((long)4);
				
				infos.add(info);
			}
			
			result.setData(infos);
			break;
			
		case 4:
			result.setData(null);
			break;

		default:
			break;
		}
		result.setState(true);
		result.setMessage("查询成功");
		
		return result;
	}

}
