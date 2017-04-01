package com.wirtualnyGabinet.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Physiotherapist;

@Repository
public interface PhysiotherapistRepository extends CrudRepository<Physiotherapist,Long> {
	
	Physiotherapist findTop1ByUsername(String name);

}
