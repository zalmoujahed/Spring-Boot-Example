package com.group27.NouveauScrum.info;



import lombok.*;
 
@Data
public class Task  {
	
	private int id;
    private String name;
    private String description;
    private int storyId;
}