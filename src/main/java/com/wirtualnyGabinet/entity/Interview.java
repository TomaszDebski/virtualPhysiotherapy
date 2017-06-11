package com.wirtualnyGabinet.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="interview")
public class Interview implements Serializable {

	@Id
	@GeneratedValue
	@JsonView(Views.Interview.class)
	public Long id;
	
	@JsonView(Views.Interview.class)
	@Column(name="description" , nullable = true, length = 500)
	public String description;
	
	@JsonView(Views.Interview.class)
	@Column(name="date")
	public Date date;
	
	@JsonView(Views.Interview.class)
	@Column(name="uniqueId")
	public String uniqueId;
	
	
	/* Relations */
//	@JsonView(Views.Visits.class)
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "patient_id")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	public Patient patient;

//	@JsonView(Views.Patient.class)
	@JsonView(Views.Interview.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "interview",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Pain> pains;
	
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


	public List<Pain> getPains() {
		return pains;
	}


	public void setPains(List<Pain> pains) {
		this.pains = pains;
	}


	public String getUniqueId() {
		return uniqueId;
	}


	public void setUniqueId(String uniqueId) {
		this.uniqueId = uniqueId;
	}


	public void setId(Long id) {
		this.id = id;
	}

	
	
	
	
	
	
}
