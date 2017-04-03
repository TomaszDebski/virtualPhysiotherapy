package com.wirtualnyGabinet.DTO;

public class InfForScheduler {
	
	private long id;
	
	private String start;
	
	private String end;
	
	private String title;
	
	private String color;
	
	private boolean allDay;
	
	private String backgroundColor;
	
	private String rendering;

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

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getBackgroundColor() {
		return backgroundColor;
	}

	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}

	public String getRendering() {
		return rendering;
	}

	public void setRendering(String rendering) {
		this.rendering = rendering;
	}
	
	
	
	
		
}
