package com.welleplus.dao;

import java.util.List;

import com.welleplus.entity.Company;

public interface CompanyDao {
	int addCompanyInfo(Company info);
	List<Company> getCompanyInfo(Long id);

}
