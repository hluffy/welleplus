package com.welleplus.dao;


import java.util.List;
import java.util.Map;

import com.welleplus.entity.Fence;

public interface FenceDao {
	int addFenceInfo(Fence info) throws Exception;
	Fence getFenceInfoFromPid(Long pid) throws Exception;
	int updateFenceInfoFromPid(Fence info) throws Exception;
	int deleteFenceInfo(Long pid) throws Exception;
	List<Fence> getFenceInfoFromFirmId(Long id) throws Exception;
	List<Fence> getFenceInfoFromCompanyId(Map<String,Long> map) throws Exception;
	List<Fence> getFenceInfoFromSectionId(Map<String,Long> map) throws Exception;
	Long getCountUserInFence(Long id) throws Exception;

}
