package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roberto.spring.memigo.api.memigoapi.DTOs.TemplateDTO;
import com.roberto.spring.memigo.api.memigoapi.DTOs.TemplateMapper;
import com.roberto.spring.memigo.api.memigoapi.DTOs.TemplateMapperImpl;
import com.roberto.spring.memigo.api.memigoapi.models.Template;
import com.roberto.spring.memigo.api.memigoapi.services.TemplateService;

/**
 * Controlador para manejar las solicitudes relacionadas con las plantillas.
 */
@RestController
@RequestMapping("/api")
public class TemplateController implements ITemplateController{

    @Autowired
    private TemplateService templateServ;

    private TemplateMapper templateMapper = new TemplateMapperImpl();

    @GetMapping("/templates")
    public List<TemplateDTO> getAll() {
        List<TemplateDTO> templateDTOs = new ArrayList<>();
        for (Template template : templateServ.getAll()) {
            TemplateDTO templateDTO = templateMapper.templateToTemplateDTO(template);
            templateDTOs.add(templateDTO);
        }
        return templateDTOs;
    }
    
}
