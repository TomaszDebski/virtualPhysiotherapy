package com.wirtualnyGabinet.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wirtualnyGabinet.entity.BodyPlace;
import com.wirtualnyGabinet.entity.KindOfPain;
import com.wirtualnyGabinet.repository.BodyPlaceRepository;
import com.wirtualnyGabinet.service.IBodyPlaceService;

@Service
public class BodyPlaceService implements IBodyPlaceService {

	@Autowired
	BodyPlaceRepository bodyPlaceRepository;
	
	public void save(BodyPlace bodyPlace) {
		bodyPlaceRepository.save(bodyPlace);
	}
	
	public BodyPlace findOne(long id){
		return bodyPlaceRepository.findOne(id);
	}
	
	public List<BodyPlace> findAll(){
		return (List<BodyPlace>)bodyPlaceRepository.findAll();
	}
}
