package com.wirtualnyGabinet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wirtualnyGabinet.entity.KindOfPain;

@Repository
public interface KindOfPainRepository extends CrudRepository<KindOfPain,Long>,JpaRepository<KindOfPain,Long> {

}
