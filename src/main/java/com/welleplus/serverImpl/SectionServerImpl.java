package com.welleplus.serverImpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.SectionDao;
import com.welleplus.entity.Section;
import com.welleplus.result.Result;
import com.welleplus.server.SectionServer;

@Service
public class SectionServerImpl implements SectionServer{
	@Resource
	private SectionDao sectionDao;

	public Result addSectionInfo(Section info) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			int id = sectionDao.addSectionInfo(info);
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

	public Result getSectionInfo(Long id) {
		// TODO Auto-generated method stub
		Result result = new Result();
		List<Section> infos;
		try {
			infos = sectionDao.getSectionInfo(id);
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
