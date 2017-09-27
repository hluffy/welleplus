package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.Warning;

public interface WarningDao {
	List<Warning> getWarningInfo(Long id) throws Exception;
	Long getCountWarning(Long id) throws Exception;
	List<Warning> getWarningInfoAsRole1(Warning info) throws Exception;
	List<Warning> getWarningInfoAsRole2(Warning info) throws Exception;
	List<Warning> getWarningInfoAsRole3(Warning info) throws Exception;
	List<Warning> getWarningInfoAsRole4(Warning info) throws Exception;

}
