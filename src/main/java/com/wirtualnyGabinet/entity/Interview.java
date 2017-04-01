package com.wirtualnyGabinet.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="Interview")
public class Interview implements Serializable {

	@Id
	@GeneratedValue
//	@JsonView(Views.Visits.class)
	public Long id;
	
//	@JsonView(Views.Visits.class)
	@Column(name="description")
	public String description;
	
	@Column(name="date")
	public Date date;
	
	
	/* Relations */
//	@JsonView(Views.Visits.class)
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "patient_id")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	public Patient patient;

	
	/* Relations */

	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public Patient getPatient() {
		return patient;
	}


	public void setPatient(Patient patient) {
		this.patient = patient;
	}


	public Long getId() {
		return id;
	}

	

	
	
	
	
}
