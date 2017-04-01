package com.wirtualnyGabinet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wirtualnyGabinet.DTO.EmailObject;

@RestController
public class EmailController {
	
	@RequestMapping(value="/sendEmail",method=RequestMethod.POST)
	public String sendEmail(@RequestBody EmailObject emailObject){
		System.out.println(emailObject.toString());
		return "";
	}

}
