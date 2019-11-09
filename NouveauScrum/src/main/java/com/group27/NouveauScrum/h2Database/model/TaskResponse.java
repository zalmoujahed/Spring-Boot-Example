package com.group27.NouveauScrum.h2Database.model;

import lombok.*;
import javax.persistence.*;

@Data 
@Entity
@Table(name = "Task")
public class TaskResponse  {
	
	@Id@GeneratedValue
	private int id;
	
	@Column(name = "name")
    private String name;
 
    @Column(name = "description")
    private String description;
    
    @Column(name="storyId")
    private int storyId;
    
  
    
	public TaskResponse(String n, String d, int s) {
		this.name = n;
		this.description = d;
		this.storyId = s;
		
	}



}