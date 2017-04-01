package com.wirtualnyGabinet.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping
@RestController
public class navigationController {
	
	@RequestMapping("/findUser")
	@ResponseBody
	public Principal getUser(Principal user){
		if (user == null){
			return null;
		}
		return user;
}

}
