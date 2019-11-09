package com.group27.NouveauScrum.h2Database.model;

import lombok.*;
import javax.persistence.*;

@Data 
@Entity
@Table(name = "USER_PROJECT")
public class UPResponse  {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(name= "pid")
	private int pid;
	
	@Column(name= "uid")
	private int uid;
	
	@Column(name = "manager")
    private boolean manager;
 
    

	public UPResponse(int PID, int UID, boolean Manager) {
		this.pid = PID;
		this.uid = UID;
		this.manager = Manager;
	}



}