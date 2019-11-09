package com.group27.NouveauScrum.h2Database.repositories;

import java.util.List;
 
import org.springframework.data.repository.CrudRepository;
import com.group27.NouveauScrum.h2Database.model.SprintResponse;
 
public interface SprintRepository extends CrudRepository<SprintResponse, Long>{
    List<SprintResponse> findById(int id);
    

} 