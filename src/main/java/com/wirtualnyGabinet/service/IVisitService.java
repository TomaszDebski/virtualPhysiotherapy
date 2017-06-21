package com.wirtualnyGabinet.service;

import java.security.Principal;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.wirtualnyGabinet.DTO.InfForScheduler;
import com.wirtualnyGabinet.entity.Visit;

public interface IVisitService {

	void addVisit(Visit visit,long patientId,Long serviceId,Principal principal);
	
	Visit getVisitById(long id);
	
	List<Visit> getAllVisits();
	
	List<Visit> getVisitsByPatientId(long patientId);
	
	List<Visit> getVisitsByPhysiotherapistName(String name);
	
	Page<Visit> getVisitsByPhysiotherapistIAndDate(Pageable pageable,String startDate,
			String endDate,long patient_id,Principal principal);
	
	void updateVisit(long id,@RequestBody Visit visit);
	
	void deleteVisit(long id);
	
	InfForScheduler[] getForSheduler(long id,String start, String end,String _);
	
	boolean checkAuthorization(long id, String name);
}