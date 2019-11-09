package com.group27.NouveauScrum.h2Database.repositories;

import java.util.List;
 
import org.springframework.data.repository.CrudRepository;
import com.group27.NouveauScrum.h2Database.model.UserResponse;
 
public interface UserRepository extends CrudRepository<UserResponse, Long>{
    List<UserResponse> findByLastName(String lastName);
    
    
} 