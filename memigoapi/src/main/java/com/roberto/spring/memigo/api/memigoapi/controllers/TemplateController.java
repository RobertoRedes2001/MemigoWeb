package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roberto.spring.memigo.api.memigoapi.DTOs.TemplateDTO;

/**
 * Controlador para manejar las solicitudes relacionadas con las plantillas.
 */
@RestController
@RequestMapping("/api")
public class TemplateController implements ITemplateController{

    @Override
    public List<TemplateDTO> getAll() {
        throw new UnsupportedOperationException("Unimplemented method 'getAll'");
    }

    @Override
    public ResponseEntity<?> getById(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }
    
}
