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
@Table(name="pain")
@JsonIgnoreProperties()
public class Pain {

	@Id
	@GeneratedValue
	@JsonView(Views.Pain.class)
	public Long id;
	
	@JsonView(Views.Pain.class)
	@Column(name="painName")
	public String painName;
	
	/* Relations */
	
//	@JsonView(Views.Visits.class)
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "interview_id")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	public Interview interview;

	/*/Relations */
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPainName() {
		return painName;
	}

	public void setPainName(String painName) {
		this.painName = painName;
	}

	public Interview getInterview() {
		return interview;
	}

	public void setInterview(Interview interview) {
		this.interview = interview;
	}
	
	
	
	
}
