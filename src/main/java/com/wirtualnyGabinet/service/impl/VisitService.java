package com.wirtualnyGabinet.service.impl;

import java.security.Principal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.time.DateUtils;
import org.hibernate.Hibernate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.wirtualnyGabinet.DTO.InfForScheduler;
import com.wirtualnyGabinet.entity.Patient;
import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.entity.Service;
import com.wirtualnyGabinet.entity.Treatment;
import com.wirtualnyGabinet.entity.Visit;
import com.wirtualnyGabinet.repository.PatientRepository;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.repository.ServiceRepository;
import com.wirtualnyGabinet.repository.VisitRepository;
import com.wirtualnyGabinet.service.IVisitService;

@org.springframework.stereotype.Service
public class VisitService implements IVisitService {

private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	VisitRepository visitRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	PhysiotherapistRepository physiotherapisRepository;
	
	@Autowired
	ServiceRepository serviceRepository;
	
	@Override
	public void addVisit(Visit visit, long patientId, Long serviceId, Principal principal) {
		System.out.println("serviceId " + serviceId);
		if (visit.getIsHoliday().equals("true")){
			Physiotherapist physiotherapist = physiotherapisRepository.findTop1ByUsername(principal.getName());
			if (physiotherapist != null)
			visit.setPhysiotherapist(physiotherapist);
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				String stringDate = dateFormat.format(visit.getDate());
				visit.setDate(dateFormat.parse(stringDate));
				visit.setEndDate( dateFormat.parse(dateFormat.format(visit.getEndDate())));
				System.out.println("EndDate " + visit.getEndDate());
				visitRepository.saveAndFlush(visit);
				return;
			} catch (ParseException e) {
				log.error("Problem z parsowaniem daty w addVisit method w VisitController");
				e.printStackTrace();
			}
		}
		
		Patient patient = patientRepository.findOne(patientId);
		if (patient != null){
			visit.setPatient(patient);
		}else{
			log.error("Patient is null");
		}
		if (principal != null){
			Physiotherapist physiotherapist = physiotherapisRepository.findTop1ByUsername(principal.getName());
			visit.setPhysiotherapist(physiotherapist);
		}else{
			log.error("Principal is null");
		}
		System.out.println("data " + visit.getDate().toString());
		try {
			String stringDate = new SimpleDateFormat("yyyy-MM-dd").format(visit.getDate()) + " " + visit.getHour();
			visit.setDate(new SimpleDateFormat("yyyy-MM-dd hh:mm").parse(stringDate));
			
			Service service = serviceRepository.findOne(serviceId);
			if (service != null){
				Treatment tretment = new Treatment();
				tretment.setService(service);
				tretment.setVisit(visit);
				visit.setTreatment(Arrays.asList(tretment));
			}
			
			
		} catch (ParseException e) {
			log.error("Problem z parsowaniem daty w addVisit method w VisitController");
			e.printStackTrace();
		}
		visitRepository.saveAndFlush(visit);
	}

	@Override
	public Visit getVisitById(long id) {
		Visit visit = visitRepository.findOne(id);
		return visit;
	}

	@Override
	public List<Visit> getAllVisits() {
		List<Visit> visits = (List<Visit>) visitRepository.findAll();
		for (Visit visit : visits) {
			Hibernate.initialize(visit.getPatient());
		}
		return visits;
	}

	@Override
	public List<Visit> getVisitsByPatientId(long patientId) {
		List<Visit> visits = visitRepository.findByPatientID(patientId);
		return visits;
	}

	@Override
	public List<Visit> getVisitsByPhysiotherapistName(String name) {
		Physiotherapist physiotherapist = physiotherapisRepository.findTop1ByUsername(name);
		List<Visit> visits = visitRepository.findByPhysiotherapist_id(physiotherapist.getId());
		return visits;
	}

	@Override
	public Page<Visit> getVisitsByPhysiotherapistIAndDate(Pageable pageable, String startDate, String endDate,
			long patient_id, Principal principal) {
		Physiotherapist phys= null;
		if (principal != null){
			phys = physiotherapisRepository.findTop1ByUsername(principal.getName());
		}
		System.out.println(new Date(Long.valueOf(startDate)));
		Page<Visit> visits = visitRepository.findByPhysiotherapist_idAndDateBetweenAndPatient_id(pageable,phys.getId(),new Date(Long.valueOf(startDate)),new Date(Long.valueOf(endDate)),patient_id);
		return visits;
	}

	@Override
	public void updateVisit(long id, Visit visit) {
		System.out.println("robimy update");
		Visit visitToUpdate = visitRepository.findOne(id);
		visitToUpdate.setCost(visit.getCost());
		visitToUpdate.setDate(visit.getDate());
		visitToUpdate.setDescription(visit.getDescription());
		visitToUpdate.setHour(visit.getHour());
		visitToUpdate.setLength(visit.getLength());
		visitToUpdate.setRecommendation(visit.getRecommendation());
		visitRepository.save(visitToUpdate);
	}

	@Override
	public void deleteVisit(long id) {
		Visit visit = visitRepository.findOne(id);
		visitRepository.delete(visit);
	}

	@Override
	public InfForScheduler[] getForSheduler(long id, String start, String end, String _) {
		List<Visit> lista = null;
		SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");
		try {
			lista = visitRepository.findAll();
			lista = visitRepository.findByPhysiotherapist_idAndDateBetween(id,formatter2.parse(start),formatter2.parse(end));
		} catch (ParseException e) {
			log.error("Date parse problem in getForScheduler method in VisitController");
			e.printStackTrace();
		}
		List<InfForScheduler> infForScheduler = new ArrayList<>();
		DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		for (Visit visit : lista) {
			InfForScheduler inf = new InfForScheduler();
			if (visit.getIsHoliday() != null && visit.getIsHoliday().equals("true")){
				inf.setStart(formatter.format(visit.getDate()));
				inf.setEnd(formatter.format(DateUtils.addHours(visit.getEndDate(), 24)));
				inf.setAllDay(true);
				inf.setTitle("Wakacje");
				inf.setBackgroundColor("green");
				inf.setRendering("background");
				infForScheduler.add(inf);
				continue;
			}else{				
				inf.setAllDay(false);
			}
			inf.setId(visit.getId());
			inf.setStart(formatter.format(visit.getDate()));
			inf.setEnd(formatter.format(DateUtils.addMinutes(visit.getDate(), Integer.parseInt(visit.getLength()))));
			inf.setTitle(visit.getPatient().getFirstname() + " " + visit.getPatient().getLastname());
			infForScheduler.add(inf);
		}
		InfForScheduler[] array = infForScheduler.toArray(new InfForScheduler[infForScheduler.size()]);
		return array;
	}

}
