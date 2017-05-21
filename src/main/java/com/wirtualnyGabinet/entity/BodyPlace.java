package com.wirtualnyGabinet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="body_place")
public class BodyPlace {

	@Id
	@GeneratedValue
	@JsonView(Views.KindOfPain.class)
	public Long id;
	
	@JsonView(Views.KindOfPain.class)
	@Column(name="bodyName")
	public String bodyName;
	
	@JsonView(Views.KindOfPain.class)
	@Column(name="description")
	public String description;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBodyName() {
		return bodyName;
	}

	public void setBodyName(String bodyName) {
		this.bodyName = bodyName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
