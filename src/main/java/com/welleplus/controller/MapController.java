package com.welleplus.controller;

import com.welleplus.entity.Company;
import com.welleplus.entity.Equipment;
import com.welleplus.result.Result;
import com.welleplus.server.CompanyServer;
import com.welleplus.server.EquipmentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Map;

@Controller
@RequestMapping("map")
public class MapController {
    @Resource
    private EquipmentService equipmentService;

    //    @RequestMapping("getinfos.do")
//    @ResponseBody
//    public Result getCompanyInfos() {
//        long id = 1;
//        Result result = new Result();
//        result = companyServer.getCompanyInfo(id);
//        return result;
//    }

    /**
     * 获取历史轨迹信息
     *
     * @param equipment
     * @return
     * @throws Exception
     */
    @RequestMapping("getHistory.do")
    @ResponseBody
    public Result getHistory(@RequestBody Equipment equipment) throws Exception {
        Result result = new Result();
        result = equipmentService.getHistory(equipment);
        return result;
    }

    /**
     * 获取位置信息
     *
     * @param equipment
     * @return
     * @throws Exception
     */
    @RequestMapping("getLocation.do")
    @ResponseBody
    public Result getLocation(@RequestBody Equipment equipment) throws Exception {
        Result result = new Result();
        result = equipmentService.getLocation(equipment);
        return result;
    }
}
