package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.Correlation;

public interface CorrelationDao {
	int addCorrelationInfo(Correlation info) throws Exception;
	List<Correlation> getCorrelationInfo(Correlation info);
	int deleteCorrelationInfo(Correlation info) throws Exception;
	int deleteCorrelationInfoFromUid(Long uid) throws Exception;
}
