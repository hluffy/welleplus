package com.welleplus.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class UserInfo implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 6175233045321713805L;
    private Integer id;
    private String userName;
    private String password;
    private Integer sex;
    private String role;
    private String phonenumber;
    private String email;
    private String state;
    private String name;
    private Timestamp creatdate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Timestamp getCreatdate() {
        return creatdate;
    }

    public void setCreatdate(Timestamp creatdate) {
        this.creatdate = creatdate;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


}
