package com.welleplus.serverImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.welleplus.dao.UserDao;
import com.welleplus.entity.UserInfo;
import com.welleplus.result.Result;
import com.welleplus.server.UserServer;

@Service
public class UserServerImpl implements UserServer {
    @Resource
    private UserDao userDao;

    public Result getInfos() {
        // TODO Auto-generated method stub
        Result result = new Result();
        List<UserInfo> infos = userDao.getUserInfos();
        result.setData(infos);
        result.setMessage("查询成功");
        result.setState(true);
        return result;
    }

    public Result addUserInfo(UserInfo info) throws Exception {
        // TODO Auto-generated method stub
        Result result = new Result();
        int id = userDao.addUserInfo(info);
        result.setId(info.getId());
        result.setData(info);
        result.setState(true);
        result.setMessage("添加成功");
        return result;
    }

    public Result getInfo(UserInfo info) {
        // TODO Auto-generated method stub
        Result result = new Result();
        try {
            List<UserInfo> infos = userDao.getUserInfo(info);
            result.setData(infos);
            result.setState(true);
            result.setMessage("查询成功");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            result.setState(false);
            result.setMessage("查询失败");
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 修改用户信息
     *
     * @param userInfo
     * @return
     * @throws Exception
     */
    @Override
    public Result editUser(UserInfo userInfo) throws Exception{
        Result result = new Result();
        userDao.editUser(userInfo);
        result.setState(true);
        result.setMessage("更新成功");
        return result;
    }

    /**
     * 删除用户信息
     *
     * @param userInfo
     * @return
     * @throws Exception
     */
    @Override
    public Result delUser(Long id) throws Exception{
        Result result = new Result();
        userDao.delUser(id);
        result.setState(true);
        result.setMessage("删除成功");
        return result;
    }

	@Override
	public Result getUserInfoForId(Long id) {
		// TODO Auto-generated method stub
		Result result = new Result();
		try {
			UserInfo info = userDao.getUserInfoForId(id);
			result.setData(info);
			result.setState(true);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setState(false);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Result getCountFromRoleAndRid(Long role, Long rid) {
		// TODO Auto-generated method stub
		Result result = new Result();
		Map<String,Long> map = new HashMap<String,Long>();
		map.put("role", role);
		map.put("rid", rid);
		try {
			Long count = userDao.getCountFromRoleAndRid(map);
			result.setId(count);
			result.setState(true);
			result.setMessage("查询成功");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result.setId(0L);
			result.setState(false);
			result.setMessage("查询失败");
			e.printStackTrace();
		}
		return result;
	}
}
