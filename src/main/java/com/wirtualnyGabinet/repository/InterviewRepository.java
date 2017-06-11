package com.wirtualnyGabinet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Interview;

@Repository
public interface InterviewRepository extends CrudRepository<Interview,Long>,JpaRepository<Interview,Long>  {

	@Query( "from Interview i where i.patient.id = :id order by i.date desc" )
	List<Interview> findByPatient_id(@Param("id")long id);
	
}
