package com.wirtualnyGabinet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.PainBodyPlace;

@Repository
public interface PainBodyPlaceRepository extends CrudRepository<PainBodyPlace,Long>,JpaRepository<PainBodyPlace,Long>  {

}
