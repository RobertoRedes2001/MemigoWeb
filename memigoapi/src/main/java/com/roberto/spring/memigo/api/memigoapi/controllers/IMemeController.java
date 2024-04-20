package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeDTO;
import com.roberto.spring.memigo.api.memigoapi.models.Meme;

public interface IMemeController {
    
    public List<MemeDTO> getAll();

    public ResponseEntity<?> getById(@PathVariable("id") int id);
    
    public ResponseEntity<?> getMemesByUser(@PathVariable("id") int id);

    public MemeDTO save(@RequestBody Meme meme) throws Exception;

    public ResponseEntity<String> delete(@PathVariable("id") int id);
}
