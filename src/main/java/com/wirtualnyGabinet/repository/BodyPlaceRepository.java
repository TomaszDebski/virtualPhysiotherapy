package com.wirtualnyGabinet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.BodyPlace;

@Repository
public interface BodyPlaceRepository extends CrudRepository<BodyPlace,Long>,JpaRepository<BodyPlace,Long> {

}
