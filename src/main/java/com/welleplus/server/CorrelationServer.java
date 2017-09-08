package com.welleplus.server;

import com.welleplus.entity.Correlation;
import com.welleplus.result.Result;

public interface CorrelationServer {
	Result addCorrelationInfo(Correlation info) throws Exception;

}
