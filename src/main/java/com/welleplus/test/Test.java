package com.welleplus.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class Test {
	public static void main(String[] args) {
		ApplicationContext ac = new FileSystemXmlApplicationContext("classpath:spring-mybatis.xml"); 
		System.out.println(ac.getBean("sqlSessionFactory"));
		
	}

}
