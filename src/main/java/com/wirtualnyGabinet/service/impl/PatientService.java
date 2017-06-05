package com.wirtualnyGabinet.service.impl;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.wirtualnyGabinet.entity.Patient;
import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.repository.PatientRepository;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.service.IPatinetService;

@Service
public class PatientService implements IPatinetService {

	@Autowired
	PhysiotherapistRepository physiotherapistRepository;
	
	@Autowired
	PatientRepository patientRepository;

	@Override
	public void addPatient(Patient patient, Principal principal) {
		Physiotherapist phys = physiotherapistRepository.findTop1ByUsername(principal.getName());
		patient.setPhisiotherapist_Id(Long.toString(phys.getId()));
			patient.setInsertedDate(new Date());
			patient.setRegistryDate(new Date());
		patientRepository.save(patient);
	}

	@Override
	public Patient getPatientById(long id) {
		return patientRepository.findOne(id);
	}

	@Override
	public List<Patient> getAllPatients() {
		return (List<Patient>)patientRepository.findAll();
	}

	@Override
	public List<Patient> getAllPatientsForPhysiotherapist(Principal principal) {
		Physiotherapist physiotheraphist = null;
		if (principal != null && StringUtils.isNotEmpty(principal.getName())){
			physiotheraphist = physiotherapistRepository.findTop1ByUsername(principal.getName());
		}
		List<Patient> patients = new ArrayList<>();
		if (physiotheraphist != null){
			patients = (List<Patient>)patientRepository.findByPhisiotherapist_Id(Long.toString(physiotheraphist.getId()));
		}
		return patients;
	}

	@Override
	public Page<Patient> getAllPatientsList(Pageable pageable, long id) {
		Physiotherapist physio = physiotherapistRepository.findOne(id);
		Page<Patient> patients = null;
		if (physio != null){
			patients = (Page<Patient>) patientRepository.findByPhisiotherapist_Id(pageable,Long.toString(physio.getId()));
		}
		return patients;
	}
	
	@Override
	public Page<Patient> getSearchPatient(Pageable pageable, long id, String name){
		Physiotherapist physio = physiotherapistRepository.findOne(id);
		Page<Patient> patients = null;
		patients = (Page<Patient>) patientRepository
				.findByPhisiotherapist_IdAndFirstNameOrLastName(pageable,Long.toString(physio.getId()),name);
		return patients;
	}

	@Override
	public void updatePatient(long id, Patient patient) {
		Patient oldPatient = patientRepository.findOne(id);
		if (oldPatient != null){
			oldPatient.setFirstname(patient.getFirstname());
			oldPatient.setLastname(patient.getLastname());
			oldPatient.setAddress(patient.getAddress());
			oldPatient.setAge(patient.getAge());
			oldPatient.setBirthDate(patient.getBirthDate());
			oldPatient.setCity(patient.getCity());
			oldPatient.setCountry(patient.getCountry());
			oldPatient.setDescription(patient.getDescription());
			oldPatient.setEmail(patient.getEmail());
			oldPatient.setGender(patient.getGender());
			oldPatient.setPesel(patient.getPesel());
			oldPatient.setPostCode(patient.getPostCode());
			oldPatient.setPhone(patient.getPhone());
			oldPatient.setNumber(patient.getNumber());
		}
		patientRepository.save(oldPatient);
	}

	@Override
	public void deletePatient(long id) {
		Patient patient = patientRepository.findOne(id);
		patientRepository.delete(patient);
	}
}
