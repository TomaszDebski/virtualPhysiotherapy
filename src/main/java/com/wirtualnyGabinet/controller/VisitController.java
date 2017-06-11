package com.wirtualnyGabinet.controller;

import java.security.Principal;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;
import com.wirtualnyGabinet.DTO.InfForScheduler;
import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.entity.Visit;
import com.wirtualnyGabinet.service.IVisitService;

@RestController
@RequestMapping("/visit")
public class VisitController {
	
	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Autowired
	IVisitService visitService;
	
	@RequestMapping(method= RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public void addVisit(@RequestBody Visit visit,@RequestParam long patientId,
			@RequestParam (required=false) Long serviceId,Principal principal){
		visitService.addVisit(visit, patientId, serviceId, principal);
	}
	
	@RequestMapping(value="/{id}")
	public ResponseEntity<Visit> getVisitById(@PathVariable("id") long visitId, Principal principal){
		if (visitService.checkVisit(visitId, principal.getName())){
			return new ResponseEntity<Visit>(visitService.getVisitById(visitId),HttpStatus.OK);
		}else{
			return new ResponseEntity<Visit>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	@JsonView(Views.VisitsPatient.class)
	@RequestMapping
	public List<Visit> getAllVisits(){
		return visitService.getAllVisits();
	}
	
	@JsonView(Views.VisitsPatient.class)
	@RequestMapping("/byPatient")
	public List<Visit> getVisitsByPatientId(@RequestParam("patientId") long patientId){
		return visitService.getVisitsByPatientId(patientId);
	}
	
	@JsonView(Views.VisitsPatient.class)
	@RequestMapping("/byPhysiotherapist/{name}")
	public List<Visit> getVisitsByPhysiotherapistName(@PathVariable("name") String name){
		return visitService.getVisitsByPhysiotherapistName(name);
	}
	
//	@JsonView(Views.VisitsPatient.class)
	@RequestMapping("/byDateBetween")
	public Page<Visit> getVisitsByPhysiotherapistIAndDate(Pageable pageable,@RequestParam("startDate") String startDate,
			@RequestParam("endDate") String endDate,@RequestParam("patient_id") long patient_id,Principal principal){
		return visitService.getVisitsByPhysiotherapistIAndDate(pageable, startDate, endDate, patient_id, principal);
	}
	
	
	
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
	public void updateVisit(@PathVariable("id") long id,@RequestBody Visit visit){
		visitService.updateVisit(id, visit);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deleteVisit(@PathVariable("id") long id){
		visitService.deleteVisit(id);
	}
	
	
	@RequestMapping("/forScheduler")
	public InfForScheduler[] getForSheduler(@RequestParam("id") long id,@RequestParam("start") String start,
			@RequestParam("end") String end, @RequestParam("_") String _){
		return visitService.getForSheduler(id, start, end, _);
	}
	
}
