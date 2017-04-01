package com.wirtualnyGabinet.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UtilsControllers {
	
	@Resource(name="kindOfPain")
	private Map<Integer, String> kindOfPain;
	
	@Resource(name="bodyPart")
	private Map<Integer, String> bodyPart;

	@GetMapping("/kindOfPain")
	public Map<Integer, String> showPains(){
		return kindOfPain;
	}
	
	@GetMapping("/bodyPart")
	public Map<Integer, String> showBodyParts(){
		return bodyPart;
	}
	
	
}
