package com.wirtualnyGabinet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;
import com.wirtualnyGabinet.entity.Interview;
import com.wirtualnyGabinet.entity.Pain;
import com.wirtualnyGabinet.entity.PainBodyPlace;
import com.wirtualnyGabinet.entity.Patient;
import com.wirtualnyGabinet.repository.InterviewRepository;
import com.wirtualnyGabinet.repository.PainBodyPlaceRepository;
import com.wirtualnyGabinet.repository.PainRepository;
import com.wirtualnyGabinet.repository.PatientRepository;

@RestController
@RequestMapping("/interview")
public class InterviewController {

	@Autowired
	InterviewRepository interviewRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	PainRepository painRepository;
	
	@Autowired
	PainBodyPlaceRepository painBodyPlaceRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addInterview(@RequestBody Interview interview,@RequestParam("patinet_id") long patient_id){
		Patient patient = null;
		if (patient_id > 0){
			patient = patientRepository.findOne(patient_id);
		}
		if (patient != null){
			interview.setPatient(patient);
		}
		interviewRepository.save(interview);
		
		for(Pain pain : interview.getPains()){
			pain.setInterview(interview);
			painRepository.save(pain);
			for(PainBodyPlace bodyPlace : pain.getPainBodyPlaces()){
				bodyPlace.setPain(pain);
				painBodyPlaceRepository.save(bodyPlace);
			}
		}
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
	
	@JsonView(Views.Interview.class)
	@RequestMapping(value="/allInterviewForPatient")
	public List<Interview> getInteviewsByPatinetId(@RequestParam("patient_id") long patient_id){
		return interviewRepository.findByPatient_id(patient_id);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deleteInterview(@PathVariable("id") long id){
		Interview interview = interviewRepository.findOne(id);
		interviewRepository.delete(interview);
	}
}
