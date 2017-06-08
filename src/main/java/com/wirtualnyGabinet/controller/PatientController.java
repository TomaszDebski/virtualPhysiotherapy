package com.wirtualnyGabinet.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;
import com.wirtualnyGabinet.entity.Patient;
import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.repository.PatientRepository;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.service.IPatinetService;


@RestController
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	IPatinetService patientService;

	@RequestMapping(method= RequestMethod.POST)
	public void addPatient(@RequestBody Patient patient,Principal principal){
		patientService.addPatient(patient, principal);
		
	}
	
	@JsonView(Views.Patients.class)
	@RequestMapping(value="/{id}")
	public Patient getPatientById(@PathVariable("id") long id){
		return patientService.getPatientById(id);
	}
	
	@JsonView(Views.Patient.class)
	@RequestMapping
	public List<Patient> getAllPatients(){
		return patientService.getAllPatients();
	}
	
	@JsonView(Views.Patient.class)
	@RequestMapping("/byPhysiotherapist")
	public List<Patient> getAllPatientsForPhysiotherapist(Principal principal){
		return patientService.getAllPatientsForPhysiotherapist(principal);
	}
	
//	@JsonView(Views.Patient.class)
	@RequestMapping("/cos")
	public Page<Patient> getAllPatientsList(Pageable pageable, @RequestParam("id") long id){
		return patientService.getAllPatientsList(pageable, id);
	}
	
	@RequestMapping("/searchPatient")
	public Page<Patient> getSearchPatients(Pageable pageable, @RequestParam("id") long id, @RequestParam("name") String name){
		return patientService.getSearchPatient(pageable, id, name);
	}
	
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
	public void updatePatient(@PathVariable("id") long id,@RequestBody Patient patient){
		patientService.updatePatient(id, patient);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePatient(@PathVariable("id") long id){
		patientService.deletePatient(id);
	}
	
}
