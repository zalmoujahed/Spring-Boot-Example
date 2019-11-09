package com.group27.NouveauScrum.h2Database.repositories;

import java.util.List;
 
import org.springframework.data.repository.CrudRepository;
import com.group27.NouveauScrum.h2Database.model.StoryResponse;
 
public interface StoryRepository extends CrudRepository<StoryResponse, Long>{
    List<StoryResponse> findByName(String name);
    

} 