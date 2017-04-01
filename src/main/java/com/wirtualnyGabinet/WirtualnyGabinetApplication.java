package com.wirtualnyGabinet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:xmlconfig.xml")
public class WirtualnyGabinetApplication {

	public static void main(String[] args) {
		SpringApplication.run(WirtualnyGabinetApplication.class, args);
		
	}
}
