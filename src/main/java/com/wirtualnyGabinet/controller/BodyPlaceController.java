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

//	@JsonView(Views.User.class)
//	@RequestMapping("/byUsername/{name}")
//	public Physiotherapist getPhysiotherapistByUsername(@PathVariable("name") String name){
//		return serviceRepository.findTop1ByUsername(name);
//	}
	
//	@JsonView(Views.User.class)
//	@RequestMapping("/dd")
//	public Physiotherapist getddddd(Principal principal){
//		if (principal == null){
//			return null;
//		}
//		return physiotherapistRepository.findTop1ByUsername(principal.getName()	);
//	}
	
//	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
//	public void updatePhysiotherapist(@PathVariable("id") long id,@RequestBody Physiotherapist physiotherapist){
//		Physiotherapist oldPhysiotheraphist = serviceRepository.findOne(id);
//		oldPhysiotheraphist.setAddress(physiotherapist.getAddress());
//		oldPhysiotheraphist.setCity(physiotherapist.getCity());
//		serviceRepository.save(oldPhysiotheraphist);
//	}
	
//	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
//	public void deletePhysiotherapist(@PathVariable("id") long id){
//		KindOfPain kindOfPain = kindOfPainRepository.findOne(id);
//		kindOfPainRepository.delete(kindOfPain);
//	}
}
