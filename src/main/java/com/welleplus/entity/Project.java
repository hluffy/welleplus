package com.wellplus.helmet.dao.model;

import java.util.Date;

/**
 * @author: David
 * @Description:四级机构信息
 * @Date: Created in 2017/8/22 11:43
 */
public class Project {
    /**
     * 四级机构信息id
     */
    private int id;
    /**
     * 四级机构名称
     */
    private String name;
    /**
     * 四级机构信息添加时间
     */
    private Date creatDate;
    /**
     * 四级机构地址
     */
    private String address;
    /**
     * 四级机构等级字段，默认4
     */
    private String grade;
    /**
     * 四级机构预留字段1
     */
    private String type1;
    /**
     * 四级机构预留字段2
     */
    private String type2;
    /**
     * 四级机构所属三级机构id
     */
    private int sid;

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

    public Date getCreatDate() {
        return creatDate;
    }

    public void setCreatDate(Date creatDate) {
        this.creatDate = creatDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", creatDate=" + creatDate +
                ", address='" + address + '\'' +
                ", grade='" + grade + '\'' +
                ", type1='" + type1 + '\'' +
                ", type2='" + type2 + '\'' +
                ", sid=" + sid +
                '}';
    }
}
