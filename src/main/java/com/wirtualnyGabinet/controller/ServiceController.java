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
import com.wirtualnyGabinet.entity.Service;
import com.wirtualnyGabinet.repository.ServiceRepository;

@RestController
@RequestMapping("/service")
public class ServiceController {

	@Autowired
	ServiceRepository serviceRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addService(@RequestBody Service service){
		serviceRepository.save(service);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public Service getServiceRepositoryById(@PathVariable("id") long id){
		return serviceRepository.findOne(id);
	}
	
	@JsonView(Views.Service.class)
	@RequestMapping
	public List<Service> getAllServices(){
		return (List<Service>)serviceRepository.findAll();
	}

	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePhysiotherapist(@PathVariable("id") long id){
		Service service = serviceRepository.findOne(id);
		serviceRepository.delete(service);
	}
	
}
