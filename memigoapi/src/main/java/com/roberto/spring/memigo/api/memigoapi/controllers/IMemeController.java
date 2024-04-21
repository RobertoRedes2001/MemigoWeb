package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeDTO;

public interface IMemeController {
    
    public List<MemeDTO> getAll();

    public ResponseEntity<?> getById(@PathVariable("id") int id);
    
    public ResponseEntity<?> getMemesByUser(@PathVariable("id") int id);

    public ResponseEntity<?> save(@RequestBody Map<String, String> request) throws Exception;

    public ResponseEntity<String> delete(@PathVariable("id") int id);
}
