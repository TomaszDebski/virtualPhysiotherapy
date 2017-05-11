package com.wirtualnyGabinet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="kind_of_pain")
public class KindOfPain {
	
	@Id
	@GeneratedValue
//	@JsonView(Views.Pain.class)
	public Long id;
	
//	@JsonView(Views.Pain.class)
	@Column(name="painName")
	public String painName;
	
	@JsonView(Views.Pain.class)
	@Column(name="description")
	public String description;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
