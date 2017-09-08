package com.welleplus.server;

import com.welleplus.entity.Project;
import com.welleplus.result.Result;

public interface ProjectServer {
	Result addProjectInfo(Project info);
	Result getProjectInfo(Long id);

}
