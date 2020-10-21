package com.spring.webshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.spring.webshop.config.WebshopProperties;

@SpringBootApplication
@EnableConfigurationProperties(WebshopProperties.class)
public class WebshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}

}
