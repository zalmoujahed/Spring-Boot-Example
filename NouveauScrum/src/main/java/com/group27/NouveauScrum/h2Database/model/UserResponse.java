package com.group27.NouveauScrum.h2Database.model;

import lombok.*;
import javax.persistence.*;

@Data 
@Entity
@Table(name = "USER")
public class UserResponse  {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(name = "first_name")
    private String firstName;
 
    @Column(name = "last_name")
    private String lastName;
    
    @Column(name = "email")
	private String email;
    
    @Column(name = "password")
	private String password;
    
 
    @Override
    public String toString() {
        return String.format("User[id=%d, firstName='%s', lastName='%s']", id, firstName, lastName);
    }


	public UserResponse(String first, String last, String email2, String pass) {
		this.firstName = first;
		this.lastName = last;
		this.email = email2;
		this.password = pass;
	}



}