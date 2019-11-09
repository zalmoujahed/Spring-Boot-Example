package com.group27.NouveauScrum.h2Database.model;

import lombok.*;
import javax.persistence.*;

@Data 
@Entity
@Table(name = "Project")
public class ProjectResponse  {
	
	@Id
	@GeneratedValue
	private int pid;
	
	@Column(name = "name")
    private String name;
 
    @Column(name = "description")
    private String description;
    
    @Column(name = "user_id")
    private int userId;
    
    
	public ProjectResponse(String Name, String Desc, int id) {
		this.name = Name;
		this.description = Desc;
		this.userId = id;
	}



}