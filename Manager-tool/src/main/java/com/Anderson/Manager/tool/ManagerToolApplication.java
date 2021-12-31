package com.Anderson.Manager.tool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
//@EnableJpaRepositories
public class ManagerToolApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagerToolApplication.class, args);
	}

}
