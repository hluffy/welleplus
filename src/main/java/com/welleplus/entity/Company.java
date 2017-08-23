package com.welleplus.entity;

import java.util.Date;

/**
 * @author: David
 * @Description:二级机构信息
 * @Date: Created in 2017/8/22 10:04
 */
public class Company {
    /**
     * 二级机构信息id
     */
    private int id;
    /**
     * 二级机构名称
     */
    private String name;
    /**
     * 二级机构联系电话
     */
    private String phoneNumber;
    /**
     * 二级机构邮箱
     */
    private String email;
    /**
     * 二级机构地址
     */
    private String address;
    /**
     * 二级机构信息添加时间
     */
    private Date creatDate;
    /**
     * 二级机构级别字段
     */
    private String grade;
    /*
     *二级机构信息预留字段1
     */
    private String type1;
    /**
     * 二级机构信息预留字段2
     */
    private String type2;
    /**
     * 二级机构上级部门信息id
     */
    private int fid;

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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getCreatDate() {
        return creatDate;
    }

    public void setCreatDate(Date creatDate) {
        this.creatDate = creatDate;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
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

    public int getFid() {
        return fid;
    }

    public void setFid(int fid) {
        this.fid = fid;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", creatDate=" + creatDate +
                ", grade='" + grade + '\'' +
                ", type1='" + type1 + '\'' +
                ", type2='" + type2 + '\'' +
                ", fid=" + fid +
                '}';
    }
}
