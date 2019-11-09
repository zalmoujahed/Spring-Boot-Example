package com.group27.NouveauScrum.h2Database.repositories;

import java.util.List;
 
import org.springframework.data.repository.CrudRepository;
import com.group27.NouveauScrum.h2Database.model.ProjectResponse;
 
public interface ProjectRepository extends CrudRepository<ProjectResponse, Long>{
    //List<ProjectResponse> findByLastName(String lastName);
    
    
} 