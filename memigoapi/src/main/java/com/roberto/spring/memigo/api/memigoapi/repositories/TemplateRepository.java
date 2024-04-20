package com.roberto.spring.memigo.api.memigoapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.roberto.spring.memigo.api.memigoapi.models.Template;

@Repository
public interface TemplateRepository extends JpaRepository<Template,Integer>{
    
}
