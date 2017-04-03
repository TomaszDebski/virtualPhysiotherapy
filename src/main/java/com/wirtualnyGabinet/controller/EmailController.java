package com.wirtualnyGabinet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wirtualnyGabinet.DTO.EmailRequest;
import com.wirtualnyGabinet.DTO.EmailStatus;
import com.wirtualnyGabinet.service.IEmailSender;

@RestController
public class EmailController {
	
	@Autowired
	private IEmailSender emailSender;
	
	@RequestMapping(value="/sendEmail",method=RequestMethod.POST)
	public String sendEmail(@RequestBody EmailRequest emailObject){
		emailSender.sendPlainText("virtualphysiotherapyroom@gmail.com", emailObject);
		System.out.println(emailObject.toString());
		return "";
	}

}
