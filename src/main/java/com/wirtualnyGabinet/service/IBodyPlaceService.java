package com.wirtualnyGabinet.service;

import java.util.List;

import com.wirtualnyGabinet.entity.BodyPlace;

public interface IBodyPlaceService {

	void save(BodyPlace bodyPlace);
	
	BodyPlace findOne(long id);
	
	List<BodyPlace> findAll();
}
