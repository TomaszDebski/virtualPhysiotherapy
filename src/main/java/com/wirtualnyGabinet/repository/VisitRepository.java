package com.wirtualnyGabinet.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Visit;

@Repository
public interface VisitRepository extends CrudRepository<Visit,Long>,JpaRepository<Visit,Long> {
	
	@Query( "from Visit v join fetch v.patient p where p.id = :id" )
	List<Visit> findByPatientID(@Param("id") long id);
	
	List<Visit> findByPhysiotherapist_id(long id);
	
	List<Visit> findByPhysiotherapist_idAndDateBetween(long id, Date startDate, Date endDate);
	
	Page<Visit> findByPhysiotherapist_idAndDateBetween(Pageable pageable,long id,Date startDate,Date endDate);
	
	Page<Visit> findByPhysiotherapist_idAndDateBetweenAndPatient_id(Pageable pageable,long phys_id,Date startDate,Date endDate,long patient_id);
	
	@Query( "from Visit v where v.physiotherapist.id = :physId and v.id = :visitId" )
	Visit checkVisit(@Param("visitId") long visitId, @Param("physId") long physId);

}
