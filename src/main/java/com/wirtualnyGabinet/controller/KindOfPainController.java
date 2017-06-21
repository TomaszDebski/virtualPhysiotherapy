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
import com.wirtualnyGabinet.entity.KindOfPain;
import com.wirtualnyGabinet.repository.KindOfPainRepository;

@RestController
@RequestMapping("/kindOfPain")
public class KindOfPainController {

	@Autowired
	KindOfPainRepository kindOfPainRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addKindOfPain(@RequestBody KindOfPain kindOfPain){
		kindOfPainRepository.save(kindOfPain);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public KindOfPain getKindOfPainRepositoryById(@PathVariable("id") long id){
		return kindOfPainRepository.findOne(id);
	}
	
	@JsonView(Views.KindOfPain.class)
	@RequestMapping
	public List<KindOfPain> getAllKindOfPains(){
		return (List<KindOfPain>)kindOfPainRepository.findAll();
	}

	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePhysiotherapist(@PathVariable("id") long id){
		KindOfPain kindOfPain = kindOfPainRepository.findOne(id);
		kindOfPainRepository.delete(kindOfPain);
	}
}
