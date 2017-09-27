package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.FirmInfo;

public interface FirmDao {
	FirmInfo getFirmInfo(Long id);
	List<FirmInfo> getFirmInfos();
	int updateFirmName(FirmInfo info) throws Exception;
	int deleteFirmInfo(Long id) throws Exception;

}
