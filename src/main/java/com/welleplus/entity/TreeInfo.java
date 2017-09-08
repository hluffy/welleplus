package com.welleplus.entity;

public class TreeInfo {
	private Integer id;
	private Integer pId;
	private String name;
	private boolean open;
	private Integer desc;
	private Long descId;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getpId() {
		return pId;
	}
	public void setpId(Integer pId) {
		this.pId = pId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isOpen() {
		return open;
	}
	public void setOpen(boolean open) {
		this.open = open;
	}
	public Integer getDesc() {
		return desc;
	}
	public void setDesc(Integer desc) {
		this.desc = desc;
	}
	public Long getDescId() {
		return descId;
	}
	public void setDescId(Long descId) {
		this.descId = descId;
	}
	

}
