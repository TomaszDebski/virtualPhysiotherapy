package com.wirtualnyGabinet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;
import com.wirtualnyGabinet.entity.BodyPlace;
import com.wirtualnyGabinet.service.IBodyPlaceService;

@RestController
@RequestMapping("/bodyPlace")
public class BodyPlaceController {

	@Autowired
	IBodyPlaceService bodyPlaceService;

	@RequestMapping(method= RequestMethod.POST)
	public void addBodyPlace(@RequestBody BodyPlace bodyPlace){
		bodyPlaceService.save(bodyPlace);
	}
	
	@JsonView(Views.BodyPlace.class)
	@RequestMapping(value="/{id}")
	public BodyPlace getBodyPlaceById(@PathVariable("id") long id){
		return bodyPlaceService.findOne(id);
	}
	
	@JsonView(Views.BodyPlace.class)
	@RequestMapping
	public List<BodyPlace> getAllBodyPlaces(){
		return (List<BodyPlace>)bodyPlaceService.findAll();
	}

}
