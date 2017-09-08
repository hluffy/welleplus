package com.welleplus.server;

import com.welleplus.entity.Section;
import com.welleplus.result.Result;

public interface SectionServer {
	Result addSectionInfo(Section info);
	Result getSectionInfo(Long id);

}
