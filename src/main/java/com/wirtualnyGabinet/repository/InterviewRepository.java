package com.wirtualnyGabinet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Interview;

@Repository
public interface InterviewRepository extends CrudRepository<Interview,Long>,JpaRepository<Interview,Long>  {

	List<Interview> findByPatient_id(long id);
	
}
