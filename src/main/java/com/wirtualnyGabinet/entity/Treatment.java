package com.wirtualnyGabinet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="treatment")
@JsonIgnoreProperties({"visit"})
public class Treatment {

	@Id
	@GeneratedValue
	@JsonView(Views.VisitTreatments.class)
	public Long id;
	
	@JsonView(Views.VisitTreatments.class)
	@Column(name="description")
	private String description;
	
	//Entities
	
	@JsonView(Views.VisitTreatments.class)
	@JsonProperty
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "visit_id")
	public Visit visit;
	
	@JsonView(Views.VisitServices.class)
	@JsonProperty
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "service_id")
	public Service service;

	//Entities
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Visit getVisit() {
		return visit;
	}

	public void setVisit(Visit visit) {
		this.visit = visit;
	}

	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}

}
