package com.wirtualnyGabinet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.Interview;
import com.wirtualnyGabinet.entity.Visit;

@Repository
public interface InterviewRepository extends CrudRepository<Interview,Long>,JpaRepository<Interview,Long>  {

}
