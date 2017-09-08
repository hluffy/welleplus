package com.welleplus.serverImpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.ProjectDao;
import com.welleplus.entity.Project;
import com.welleplus.result.Result;
import com.welleplus.server.ProjectServer;

@Service
public class ProjectServerImpl implements ProjectServer{
	@Resource
	private ProjectDao projectDao;

	public Result addProjectInfo(Project info) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			int id = projectDao.addProjectInfo(info);
			result.setId(info.getId());
			result.setState(true);
			result.setMessage("添加成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setState(false);
			result.setMessage("添加失败");
			e.printStackTrace();
		}
		return result;
	}

	public Result getProjectInfo(Long id) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			List<Project> infos = projectDao.getProjectInfo(id);
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

}
