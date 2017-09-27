package com.welleplus.server;

import com.welleplus.entity.Correlation;
import com.welleplus.result.Result;

public interface CorrelationServer {
	Result addCorrelationInfo(Correlation info) throws Exception;
	Result getCorrelationInfo(Correlation info);
	Result deleteCorrelationInfo(Long grade,Long gradeid);
	Result deleteCorrelationInfoFromUid(Long uid) throws Exception;

}
