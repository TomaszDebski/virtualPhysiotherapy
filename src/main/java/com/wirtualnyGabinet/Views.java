package com.wirtualnyGabinet;

public class Views {

	public interface Visits{}
	
	public interface Patient {}
	
	public interface User {}
	
	public interface VisitsPatient extends Visits,Patient{}
	
	public interface Patients extends Patient,Visits{}
	
	public interface VisitsPhysiotherapist extends Visits,User{}

}
