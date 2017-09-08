package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.Project;

public interface ProjectDao {
	int addProjectInfo(Project info) throws Exception;
	List<Project> getProjectInfo(Long id) throws Exception;

}
