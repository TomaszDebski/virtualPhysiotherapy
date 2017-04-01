package com.wirtualnyGabinet.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

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

@RestController
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	PhysiotherapistRepository physiotherapistRepository;
	
	@Autowired
	PatientRepository patientRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addPatient(@RequestBody Patient patient){
		patientRepository.save(patient);
	}
	
	@JsonView(Views.Patients.class)
	@RequestMapping(value="/{id}")
	public Patient getPatientById(@PathVariable("id") long id){
		return patientRepository.findOne(id);
	}
	
	@JsonView(Views.Patient.class)
	@RequestMapping
	public List<Patient> getAllPatients(){
		return (List<Patient>)patientRepository.findAll();
	}
	
	@JsonView(Views.Patient.class)
	@RequestMapping("/byPhysiotherapist")
	public List<Patient> getAllPatientsForPhysiotherapist(@RequestParam("name") String name){
		Physiotherapist physiotheraphist = physiotherapistRepository.findTop1ByUsername(name);
		List<Patient> patients = new ArrayList<>();
		if (physiotheraphist != null){
			patients = (List<Patient>)patientRepository.findById(physiotheraphist.getId());
		}
		return patients;
	}
	
//	@JsonView(Views.Patient.class)
	@RequestMapping("/cos")
	public Page<Patient> getAllPatientsList(Pageable pageable, @RequestParam("id") long id){
		Physiotherapist physio = physiotherapistRepository.findOne(id);
		Page<Patient> patients = null;
		if (physio != null){
			patients = (Page<Patient>) patientRepository.findById(pageable,physio.getId());
		}
		return patients;
	}
	
	
//	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
//	public void updatePhysiotherapist(@PathVariable("id") long id,@RequestBody Physiotherapist physiotherapist){	
//		physiotherapistRepository.save(physiotherapist);
//	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePatient(@PathVariable("id") long id){
		Patient patient = patientRepository.findOne(id);
		patientRepository.delete(patient);
	}
	
//	@RequestMapping(value="/bookWithoutId")
//	public List<Book> getAllBooksWithoutId(){
//		return bookService.getAllBooksWithoutId();
//	}
//	
//	@RequestMapping(value="/bookReaderBooks/{bookReaderName}")
//	public List<Book> getAllBooksOneBookReader(@PathVariable String bookReaderName){
//		return bookService.getAllBooksForBookReaderByName(bookReaderName);
//}
}
