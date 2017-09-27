package com.welleplus.server;

import com.welleplus.entity.UserInfo;
import com.welleplus.result.Result;

import java.util.Map;

public interface UserServer {
    Result getInfos();

    Result addUserInfo(UserInfo info) throws Exception;

    Result getInfo(UserInfo info);

    /**
     * 修改用户信息
     *
     * @param userInfo
     * @return
     * @throws Exception
     */
    Result editUser(UserInfo userInfo) throws Exception;

    /**
     * 删除用户信息
     *
     * @param userInfo
     * @return
     * @throws Exception
     */
    Result delUser(Long id) throws Exception;
    
    Result getUserInfoForId(Long id);
    
    Result getCountFromRoleAndRid(Long role,Long rid);
}
