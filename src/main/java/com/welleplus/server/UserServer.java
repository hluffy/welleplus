package com.welleplus.server;

import com.welleplus.entity.UserInfo;
import com.welleplus.result.Result;

public interface UserServer {
	Result getInfos();
	Result addUserInfo(UserInfo info);

}
