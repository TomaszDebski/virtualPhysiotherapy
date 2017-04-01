package com.wirtualnyGabinet.DTO;

public class InfForScheduler {
	
	private long id;
	
	private String start;
	
	private String end;
	
	private String title;
	
	private boolean allDay;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStart() {
		return start;
	}

	public void setStart(String start) {
		this.start = start;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	
	public boolean isAllDay() {
		return allDay;
	}

	public void setAllDay(boolean allDay) {
		this.allDay = allDay;
	}

	public String getEnd() {
		return end;
	}

	public void setEnd(String end) {
		this.end = end;
	}
	
		
	

}
