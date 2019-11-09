package com.group27.NouveauScrum.h2Database.model;

import lombok.*;
import javax.persistence.*;

@Data 
@Entity
@Table(name = "Story")
public class StoryResponse  {
	
	@Id@GeneratedValue
	private int id;
	
	@Column(name = "name")
    private String name;
 
    @Column(name = "description")
    private String description;
    
    @Column(name="space")
    private String space;
    
    @Column(name = "projectId")
    private int projectId;
    
	public StoryResponse( String n, String d, String s, int pi) {
		this.name = n;
		this.description = d;
		this.space = s;
		this.projectId = pi;
		
	}



}