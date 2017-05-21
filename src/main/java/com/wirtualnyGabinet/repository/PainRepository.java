package com.wirtualnyGabinet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Pain;

@Repository
public interface PainRepository extends CrudRepository<Pain,Long>,JpaRepository<Pain,Long>  {

}
