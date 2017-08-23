package com.wellplus.helmet.dao.model;

/**
 * @author: David
 * @Description:
 * @Date: Created in 2017/8/23 10:41
 */
public class Correlation {
    private int id;
    private int uid;
    private int pmid;
    private int grade;
    private int gradeid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getPmid() {
        return pmid;
    }

    public void setPmid(int pmid) {
        this.pmid = pmid;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public int getGradeid() {
        return gradeid;
    }

    public void setGradeid(int gradeid) {
        this.gradeid = gradeid;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Correlation{" +
                "id=" + id +
                ", uid=" + uid +
                ", pmid=" + pmid +
                ", grade=" + grade +
                ", gradeid=" + gradeid +
                '}';
    }
}
