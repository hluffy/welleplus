package com.welleplus.entity;

import java.util.Date;

/**
 * @author: David
 * @Description: 报警信息Correlation
 * @Date: Created in 2017/8/23 10:32
 */
public class Warning {
    /**
     * 设备报警信息id
     */
    private int id;
    /**
     * 设备报警围栏名称
     */
    private String name;
    /**
     * 报警设备编号
     */
    private String imei;
    /**
     * 报警类型
     */
    private String waringType;
    /**
     * 报警时间
     */
    private Date watchTime;
    /**
     * 报警信息预留字段1
     */
    private String type1;
    /**
     * 报警信息预留字段2
     */
    private String type2;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }

    public String getWaringType() {
        return waringType;
    }

    public void setWaringType(String waringType) {
        this.waringType = waringType;
    }

    public Date getWatchTime() {
        return watchTime;
    }

    public void setWatchTime(Date watchTime) {
        this.watchTime = watchTime;
    }

    public String getType1() {
        return type1;
    }

    public void setType1(String type1) {
        this.type1 = type1;
    }

    public String getType2() {
        return type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    @Override
    public String toString() {
        return "Warning{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", imei='" + imei + '\'' +
                ", waringType='" + waringType + '\'' +
                ", watchTime=" + watchTime +
                ", type1='" + type1 + '\'' +
                ", type2='" + type2 + '\'' +
                '}';
    }
}
