package com.welleplus.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * @author: David
 * @Description:三级机构信息
 * @Date: Created in 2017/8/23 10:05
 */
public class Section implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -452504195707370382L;
	/**
     * 三级机构信息id
     */
    private int id;
    /**
     * 三级机构名称
     */
    private String name;
    /**
     * 添加机构信息时间
     */
    private Date creatDate;
    /**
     * 三级机构地址
     */
    private String address;
    /**
     * 机构等级字段3
     */
    private String grade;
    /**
     * 三级机构信息预留字段1
     */
    private String type1;
    /**
     * 三级机构信息预留字段2
     */
    private String type2;
    /**
     * 三级机构关联的上级机构id
     */
    private String cid;

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

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    @Override
    public String toString() {
        return "Section{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", creatDate=" + creatDate +
                ", address='" + address + '\'' +
                ", grade='" + grade + '\'' +
                ", type1='" + type1 + '\'' +
                ", type2='" + type2 + '\'' +
                ", cid='" + cid + '\'' +
                '}';
    }
}
