package com.wirtualnyGabinet;

public class Views {

	public interface Visits{}
	
	public interface Patient {}
	
	public interface User {}
	
	public interface Interview{}
	
	public interface Pain {}
	
	public interface KindOfPain {}
	
	public interface Service{}
	
	public interface VisitsPatient extends Visits,Patient,Service{}
	
	public interface Patients extends Patient,Visits{}
	
	public interface VisitsPhysiotherapist extends Visits,User{}

	public interface VisitTreatments extends Visits{}
	
	public interface VisitServices{}
}
