package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import com.roberto.spring.memigo.api.memigoapi.DTOs.TemplateDTO;

public interface ITemplateController {
    
    public List<TemplateDTO> getAll();

    public ResponseEntity<?> getById(@PathVariable("id") int id);

}
