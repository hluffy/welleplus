package com.wellplus.helmet.dao.model;

import java.util.Date;

/**
 * @author: David
 * @Description:设备基本信息
 * @Date: Created in 2017/8/22 10:20
 */
public class Equipment {
    /**
     * 设备信息id
     */
    private int id;
    /**
     * 设备入网编号
     */
    private String imei;
    /**
     * 设备基本信息添加时间
     */
    private Date creatDate;
    /**
     * 设备基本信息修改时间
     */
    private Date upDate;
    /**
     * 设备关联一级机构id
     */
    private int fid;
    /**
     * 设备关联用户id
     */
    private int uid;
    /**
     * 设备关联用户id
     */
    private int feid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }

    public Date getCreatDate() {
        return creatDate;
    }

    public void setCreatDate(Date creatDate) {
        this.creatDate = creatDate;
    }

    public Date getUpDate() {
        return upDate;
    }

    public void setUpDate(Date upDate) {
        this.upDate = upDate;
    }

    public int getFid() {
        return fid;
    }

    public void setFid(int fid) {
        this.fid = fid;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getFeid() {
        return feid;
    }

    public void setFeid(int feid) {
        this.feid = feid;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Equipment{" +
                "id=" + id +
                ", imei='" + imei + '\'' +
                ", creatDate=" + creatDate +
                ", upDate=" + upDate +
                ", fid=" + fid +
                ", uid=" + uid +
                ", feid=" + feid +
                '}';
    }
}
