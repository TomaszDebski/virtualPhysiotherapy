package com.wirtualnyGabinet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="treatment")
public class Treatment {

	@Id
	@GeneratedValue
	@JsonView(Views.VisitTreatments.class)
	public Long id;
	
//	@JsonView(Views.VisitServices.class)
//	@Column(name="treatmentName")
//	private String treatmentName;
	
//	@JsonView(Views.VisitServices.class)
//	@Column(name="price")
//	private double price;
	
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
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "service_id")
	public Service service;

	//Entities
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

//	public double getPrice() {
//		return price;
//	}
//
//	public void setPrice(double price) {
//		this.price = price;
//	}

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

//	public String getTreatmentName() {
//		return treatmentName;
//	}
//
//	public void setTreatmentName(String treatmentName) {
//		this.treatmentName = treatmentName;
//	}
	
	
}
