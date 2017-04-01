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
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.wirtualnyGabinet.Views;

@Entity
@Table(name="physiotherapist")
public class Physiotherapist implements Serializable {

	@Id
	@GeneratedValue
	@JsonView(Views.User.class)
	public Long id;
	
	@JsonView(Views.User.class)
	@Column(name="username")
	public String username;
	
	@Column(name="password")
	public String password;
	
	@JsonView(Views.User.class)
	@Column(name="role")
	private String role;
	
	@JsonView(Views.User.class)
	@Column(name="firstName")
	public String firstname;
	
	@JsonView(Views.User.class)
	@Column(name="lastName")
	public String lastname;
	
	@JsonView(Views.User.class)
	@Column(name="phone")
	public String phone;
	
	@JsonView(Views.User.class)
	@Column(name="pesel")
	public String pesel;
	
	@JsonView(Views.User.class)
	@Column(name="secondPhone")
	public String secondPhone;
	
	@JsonView(Views.User.class)
	@Column(name="email")
	public String email;
	
	@JsonView(Views.User.class)
	@Column(name="city")
	public String city;
	
	@JsonView(Views.User.class)
	@Column(name="postCode")
	public String postCode;
	
	@JsonView(Views.User.class)
	@Column(name="address")
	public String address;
	
	@JsonView(Views.User.class)
	@Column(name="number")
	public String number;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	@Lob
	private byte[] file;

    private String mimeType;
	
	public Physiotherapist(){
	}

	public Physiotherapist(String username, String password,String firstname, String lastname, String phone, String secondPhone, String email,
			String city, String postCode, String address, String role) {
		super();
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.secondPhone = secondPhone;
		this.email = email;
		this.city = city;
		this.postCode = postCode;
		this.address = address;
		this.role = role;
	}
	
	/* Relations */
	
	@JsonView(Views.VisitsPhysiotherapist.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "physiotherapist",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Visit> visits;

	/* Relations */

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return firstname;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Visit> getVisits() {
		return visits;
	}

	public void setVisits(List<Visit> visits) {
		this.visits = visits;
	}

	public String getPesel() {
		return pesel;
	}

	public void setPesel(String pesel) {
		this.pesel = pesel;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	public String getMimeType() {
		return mimeType;
	}

	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}
	
}
