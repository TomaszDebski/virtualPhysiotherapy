package com.wirtualnyGabinet.entity;

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
	
	@JsonView(Views.Interview.class)
	@Column(name="painName")
	public String painName;
	
	@JsonView(Views.Interview.class)
	@Column(name="description" , nullable = true, length = 500)
	public String description;
	
	/* Relations */
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "interview_id")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	public Interview interview;
	
	@JsonView(Views.Interview.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "pain",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<PainBodyPlace> painBodyPlaces;

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

	public List<PainBodyPlace> getPainBodyPlaces() {
		return painBodyPlaces;
	}

	public void setPainBodyPlaces(List<PainBodyPlace> painBodyPlaces) {
		this.painBodyPlaces = painBodyPlaces;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
