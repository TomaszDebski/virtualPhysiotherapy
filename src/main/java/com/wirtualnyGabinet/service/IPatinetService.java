package com.wirtualnyGabinet.service;

import java.security.Principal;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.wirtualnyGabinet.entity.Patient;

public interface IPatinetService {

	void addPatient(Patient patient,Principal principal);
	
	Patient getPatientById(long id);
	
	List<Patient> getAllPatients();
	
	List<Patient> getAllPatientsForPhysiotherapist(Principal principal);
	
	Page<Patient> getAllPatientsList(Pageable pageable, long id);
	
	Page<Patient> getSearchPatient(Pageable pageable, long id, String name);
	
	void updatePatient(long id,Patient patient);
	
	void deletePatient(long id);
}
