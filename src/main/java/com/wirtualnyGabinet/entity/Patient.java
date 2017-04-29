package com.wirtualnyGabinet.entity;

import java.io.Serializable;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="patient")
@JsonIgnoreProperties({"visits","phisiotherapistId"})
//@JsonAppend(props = {@JsonAppend.Prop(value = "version")})
public class Patient implements Serializable{

	@Id
	@GeneratedValue
	@JsonView(Views.Patient.class)
	public Long id;
	
	@JsonView(Views.Patient.class)
	@Column(name="firstName")
	public String firstname;
	
	@JsonView(Views.Patient.class)
	@Column(name="lastName")
	public String lastname;
	
	@JsonView(Views.Patient.class)
	@Column(name="phone")
	public String phone;
	
	@Column(name="secondPhone")
	public String secondPhone;
	
	@JsonView(Views.Patient.class)
	@Column(name="email")
	public String email;
	
	@JsonView(Views.Patient.class)
	@Column(name="city")
	public String city;
	
	@JsonView(Views.Patient.class)
	@Column(name="postCode")
	public String postCode;
	
	@JsonView(Views.Patient.class)
	@Column(name="address")
	public String address;
	
	@JsonView(Views.Patient.class)
	@Column(name="number")
	public String number;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	@JsonView(Views.Patient.class)
	@Column(name="birthDate")
	public Date birthDate;
	
	@JsonView(Views.Patient.class)
	@Column(name="age")
	public int age;
	
	@JsonView(Views.Patient.class)
	@Column(name="gender")
	public String gender;
	
	@Column(name="registryDate")
	public Date registryDate;
	
	@JsonView(Views.Patient.class)
	@Column(name="PESEL")
	public String pesel;
	
	@Column(name="country")
	public String country;
	
	@JsonView(Views.Patient.class)
	@Column(name="description")
	public String description;
	
//	@Transient
	@Column(name="phisiotherapist_Id",nullable=true)
	private String phisiotherapist_Id;
	
	public Patient(){}
	
	@JsonView(Views.Patient.class)
	@Transient
	public Date lastVisit;
	
	public Date getLastVisit() {
		if (visits != null && !visits.isEmpty()){
			List<Date> dateVisits = visits.stream().map(Visit::getDate).collect(Collectors.toList());
			return (Date) Collections.max(dateVisits);
		}else{
//			System.out.println("źle");
		}
		return null;
	}


	public Patient(String firstname, String lastname, String phone, String email,String gender,int age) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.email = email;
		this.gender = gender;
		this.age = age;
	}




	/* Relations */
	@JsonView(Views.Patients.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "patient",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Visit> visits;
	
//	@JsonView(Views.Patient.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "patient",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Interview> interviews;
	
	/* Relations */
	
	

	public String getFirstname() {
		return firstname;
	}

	public Long getId() {
		return id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSecondPhone() {
		return secondPhone;
	}

	public void setSecondPhone(String secondPhone) {
		this.secondPhone = secondPhone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Date getRegistryDate() {
		return registryDate;
	}

	public void setRegistryDate(Date registryDate) {
		this.registryDate = registryDate;
	}

	public String getPesel() {
		return pesel;
	}

	public void setPesel(String pesel) {
		this.pesel = pesel;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}




	public int getAge() {
		return age;
	}




	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public List<Visit> getVisits() {
		return visits;
	}

	public void setVisits(List<Visit> visits) {
		this.visits = visits;
	}

	public List<Interview> getInterviews() {
		return interviews;
	}

	public void setInterviews(List<Interview> interviews) {
		this.interviews = interviews;
	}

	public String getPhisiotherapist_Id() {
		return phisiotherapist_Id;
	}

	public void setPhisiotherapist_Id(String phisiotherapist_Id) {
		this.phisiotherapist_Id = phisiotherapist_Id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

//	public long getPhisiotherapist_Id() {
//		return phisiotherapist_Id;
//	}
//
//	public void setPhisiotherapist_Id(long phisiotherapist_Id) {
//		this.phisiotherapist_Id = phisiotherapist_Id;
//	}

	
	
	
	
}
