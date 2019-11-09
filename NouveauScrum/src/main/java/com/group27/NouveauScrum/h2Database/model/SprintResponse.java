package com.group27.NouveauScrum.h2Database.model;

import lombok.*;
import javax.persistence.*;

@Data 
@Entity
@Table(name = "Sprint")
public class SprintResponse  {
	
	@Id@GeneratedValue
	@Column(name="id")
	private int id;
	
	@Column(name="start")
	private String start;
	
	@Column(name="end")
	private String end;
	
	@Column(name="projectId")
	private int projectId;
	
	public SprintResponse(int i, String s, String e, int pi) {
		this.id = i;
		this.start = s;
		this.end = e;
		this.projectId = pi;
		
	}



}
