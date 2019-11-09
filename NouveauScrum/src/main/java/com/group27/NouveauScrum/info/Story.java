package com.group27.NouveauScrum.info;



import lombok.*;
 
@Data
public class Story  {
	
	private int id;
    private String name;
    private String description;
	private String space;
	private int projectId;
}