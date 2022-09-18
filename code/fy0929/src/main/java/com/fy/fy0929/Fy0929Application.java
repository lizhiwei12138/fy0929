package com.fy.fy0929;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@MapperScan("com.fy.fy0929.mapper")
@SpringBootApplication
public class Fy0929Application {

    public static void main(String[] args) {
        SpringApplication.run(Fy0929Application.class, args);
    }

}
