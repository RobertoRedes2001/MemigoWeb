package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import com.roberto.spring.memigo.api.memigoapi.DTOs.TemplateDTO;

public interface ITemplateController {
    
    public List<TemplateDTO> getAll();

}
