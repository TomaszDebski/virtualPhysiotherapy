package com.wirtualnyGabinet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="pain_body_place")
@JsonIgnoreProperties()
public class PainBodyPlace {
	
	@Id
	@GeneratedValue
	@JsonView(Views.Pain.class)
	public Long id;
	
	@JsonView(Views.Interview.class)
	@Column(name="bodyPlaceName")
	public String bodyPlaceName;
	
	/* Relations */
	
//	@JsonView(Views.Visits.class)
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "pain_id")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	public Pain pain;
	
	/*/Relations */

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getBodyPlaceName() {
		return bodyPlaceName;
	}

	public void setBodyPlaceName(String bodyPlaceName) {
		this.bodyPlaceName = bodyPlaceName;
	}

	public Pain getPain() {
		return pain;
	}

	public void setPain(Pain pain) {
		this.pain = pain;
	}

	

	
}
