package com.wirtualnyGabinet.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="service")
public class Service {

	@Id
	@GeneratedValue
	@JsonView(Views.Service.class)
	public Long id;
	
	@JsonView(Views.Service.class)
	@Column(name="serviceName")
	private String serviceName;
	
	@JsonView(Views.Service.class)
	@Column(name="price")
	private double price;
	
	@JsonView(Views.Service.class)
	@Column(name="description")
	private String description;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
