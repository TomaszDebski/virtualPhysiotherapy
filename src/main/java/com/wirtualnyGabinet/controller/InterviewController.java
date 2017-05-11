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
import com.wirtualnyGabinet.entity.Interview;
import com.wirtualnyGabinet.repository.InterviewRepository;

@RestController
@RequestMapping("/interview")
public class InterviewController {

	@Autowired
	InterviewRepository interviewRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addInterview(@RequestBody Interview interview){
		interviewRepository.save(interview);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public Interview getInterviewRepositoryById(@PathVariable("id") long id){
		return interviewRepository.findOne(id);
	}
	
	@JsonView(Views.Service.class)
	@RequestMapping
	public List<Interview> getAllInterviews(){
		return (List<Interview>)interviewRepository.findAll();
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
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deleteInterview(@PathVariable("id") long id){
		Interview interview = interviewRepository.findOne(id);
		interviewRepository.delete(interview);
	}
}
