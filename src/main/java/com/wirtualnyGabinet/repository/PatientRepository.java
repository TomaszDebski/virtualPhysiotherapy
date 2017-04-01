package com.wirtualnyGabinet.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient,Long>,PagingAndSortingRepository<Patient,Long> {

	@Query("select distinct p from Patient p join p.visits v where v.physiotherapist.id = :id")
	List<Patient> findById(@Param("id")long id);
	
	@Query("select distinct p from Patient p join p.visits v where v.physiotherapist.id = :id")
	Page<Patient> findById(Pageable pageable,@Param("id")long id);
	
//	Page<Patient> findByfirstname(Pageable pageable, String firstname);
	
}
