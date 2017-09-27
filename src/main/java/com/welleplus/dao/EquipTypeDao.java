package com.welleplus.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface EquipTypeDao {

	List<Integer> getCountBy1(@Param("param") Map<String, Object> param) throws Exception;
	List<Integer> getCountBy2(@Param("param") Map<String, Object> param) throws Exception;
	List<Integer> getCountBy3(@Param("param") Map<String, Object> param) throws Exception;
	List<Integer> getCountBytree(@Param("param") Map<String, Object> param) throws Exception;
}
