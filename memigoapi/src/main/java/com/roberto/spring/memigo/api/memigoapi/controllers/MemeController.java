package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeDTO;
import com.roberto.spring.memigo.api.memigoapi.models.Meme;

/**
 * Controlador para manejar las solicitudes relacionadas con los memes.
 */
@RestController
@RequestMapping("/api")
public class MemeController implements IMemeController{

    @Override
    public List<MemeDTO> getAll() {
        throw new UnsupportedOperationException("Unimplemented method 'getAll'");
    }

    @Override
    public ResponseEntity<?> getById(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public ResponseEntity<?> getMemesByUser(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'getMemesByUser'");
    }

    @Override
    public MemeDTO save(Meme meme) throws Exception {
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }

    @Override
    public ResponseEntity<String> delete(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }
    
}
