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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="visit")
@JsonIgnoreProperties({"physiotherapist"})
public class Visit implements Serializable {

	@Id
	@GeneratedValue
	@JsonView(Views.Visits.class)
	public Long id;
	
	@JsonView(Views.Visits.class)
	@Column(name="cost")
	public String cost;
	
	@JsonView(Views.Visits.class)
	@Column(name="date")
	public Date date;
	
	@JsonView(Views.Visits.class)
	@Column(name="endDate")
	public Date endDate;
	
	@JsonView(Views.Visits.class)
	@Column(name="isHoliday")
	public String isHoliday;
	
	@JsonView(Views.Visits.class)
	@Column(name="hour")
	public String hour;
	
	@JsonView(Views.Visits.class)
	@Column(name="length")
	public String length;
	
	@JsonView(Views.Visits.class)
	@Column(name="description")
	public String description;
	
	@JsonView(Views.Visits.class)
	@Column(name="recommendation")
	public String recommendation;
	
	@JsonView(Views.Visits.class)
	@Column(name="paymentMethod")
	public String paymentMethod;
	
	@JsonView(Views.Visits.class)
	@Column(name="status")
	public String status;
	
	
	/* Relations */
//	@JsonView(Views.Visits.class)
//	@JsonProperty
	@JsonView(Views.VisitsPatient.class)
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "patient_id")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	public Patient patient;
	
	@JsonView(Views.VisitsPhysiotherapist.class)
	@JsonProperty
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "physiotherapist_id")
	public Physiotherapist physiotherapist;
	
	
	@JsonView(Views.VisitServices.class)
	@JsonProperty
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "visit",fetch=FetchType.EAGER,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Treatment> treatment;
	

	/* Relations */
	
	

	public String getCost() {
		return cost;
	}


	public Long getId() {
		return id;
	}


	public void setCost(String cost) {
		this.cost = cost;
	}

	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public String getHour() {
		return hour;
	}


	public void setHour(String hour) {
		this.hour = hour;
	}


	public String getLength() {
		return length;
	}


	public void setLength(String length) {
		this.length = length;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}

	public String getRecommendation() {
		return recommendation;
	}

	public void setRecommendation(String recommendation) {
		this.recommendation = recommendation;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Physiotherapist getPhysiotherapist() {
		return physiotherapist;
	}

	public void setPhysiotherapist(Physiotherapist physiotherapist) {
		this.physiotherapist = physiotherapist;
	}


	public Date getEndDate() {
		return endDate;
	}


	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}


	public String getIsHoliday() {
		return isHoliday;
	}


	public void setIsHoliday(String isHoliday) {
		this.isHoliday = isHoliday;
	}
	

	public String getPaymentMethod() {
		return paymentMethod;
	}


	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	
	


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public List<Treatment> getTreatment() {
		return treatment;
	}


	public void setTreatment(List<Treatment> treatment) {
		this.treatment = treatment;
	}


}
