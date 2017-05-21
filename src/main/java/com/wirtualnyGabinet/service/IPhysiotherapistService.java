package com.wirtualnyGabinet.service;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import com.wirtualnyGabinet.entity.Physiotherapist;

public interface IPhysiotherapistService {
	
	Physiotherapist findOne(Long id);

	void addPhysiotherapist(Physiotherapist physiotherapist);
	
	List<Physiotherapist> getAllPhysiotherapists();
	
	Physiotherapist getPhysiotherapistByUsername(String name);
	
	void updatePhysiotherapist(long id, Physiotherapist physiotherapist);
	
	void deletePhysiotherapist(long id);
}
