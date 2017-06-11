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
import com.wirtualnyGabinet.entity.Visit;

@Repository
public interface PatientRepository extends CrudRepository<Patient,Long>,PagingAndSortingRepository<Patient,Long> {

	@Query("select distinct p from Patient p join p.visits v where v.physiotherapist.id = :id")
	List<Patient> findById(@Param("id")long id);
	
	@Query("select distinct p from Patient p join p.visits v where v.physiotherapist.id = :id and p.phisiotherapist_Id is not null")
	Page<Patient> findById(Pageable pageable,@Param("id")long id);
	
	@Query("select distinct p from Patient p where p.phisiotherapist_Id = :id")
	Page<Patient> findByPhisiotherapist_Id(Pageable pageable,@Param("id")String id);
	
	@Query("select distinct p from Patient p where p.phisiotherapist_Id = :id and (p.firstname like CONCAT('%',:name,'%') or p.lastname like CONCAT('%',:name,'%'))")
	Page<Patient> findByPhisiotherapist_IdAndFirstNameOrLastName(Pageable pageable,@Param("id")String id,@Param("name")String name);
	
	@Query("select distinct p from Patient p where p.phisiotherapist_Id = :id")
	List<Patient> findByPhisiotherapist_Id(@Param("id")String id);

	@Query("from Patient p where p.id = :patientId and p.phisiotherapist_Id = :physId")
	Patient checkPatient(@Param("patientId")long patientId, @Param("physId")String id);
	
}
