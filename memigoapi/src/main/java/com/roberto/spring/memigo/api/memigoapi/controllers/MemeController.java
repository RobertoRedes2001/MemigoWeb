package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeDTO;
import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeMapperImpl;
import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeMapper;
import com.roberto.spring.memigo.api.memigoapi.models.Meme;
import com.roberto.spring.memigo.api.memigoapi.services.MemeService;

/**
 * Controlador para manejar las solicitudes relacionadas con los memes.
 */
@RestController
@RequestMapping("/api")
public class MemeController implements IMemeController{

    @Autowired
    private MemeService memeServ;

    private MemeMapper memeMapper = new MemeMapperImpl();

    @GetMapping("/memes")
    public List<MemeDTO> getAll() {
        List<MemeDTO> memeDTOs = new ArrayList<>();
        for (Meme meme : memeServ.getAll()) {
            MemeDTO memeDTO = memeMapper.memeToMemeDTO(meme);
            memeDTOs.add(memeDTO);
        }
        return memeDTOs;
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
