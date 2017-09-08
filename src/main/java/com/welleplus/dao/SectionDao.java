package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.Section;

public interface SectionDao {
	int addSectionInfo(Section info) throws Exception;
	List<Section> getSectionInfo(Long id) throws Exception;

}
