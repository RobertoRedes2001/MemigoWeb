package com.roberto.spring.memigo.api.memigoapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roberto.spring.memigo.api.memigoapi.models.Template;
import com.roberto.spring.memigo.api.memigoapi.repositories.TemplateRepository;

/**
 * Clase que proporciona servicios relacionados con las plantillas.
 */
@Service
public class TemplateService {
  /** Repositorio de plantillas. */
  @Autowired
  TemplateRepository templateRep;

  /**
   * Obtiene todas las plantilla.
   * @return Una lista de todas las plantillas.
   */
  public List<Template> getAll(){
      return templateRep.findAll();
  }

  /**
   * Obtiene un usuario por su identificador único.
   * @param id El identificador único de la plantilla.
   * @return Una plantilla opcional.
   */
  public Optional<Template> getById(int id){
      return templateRep.findById(id);
  }  
}
