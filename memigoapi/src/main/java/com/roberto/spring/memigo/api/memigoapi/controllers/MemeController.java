package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/memes/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        if (memeServ.getById(id).isPresent()) {
            MemeDTO meme = memeMapper.memeToMemeDTO(memeServ.getById(id).get());
            return ResponseEntity.ok().body(meme);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meme con ID " + id + " no encontrado.");
        }
    }

    @GetMapping("/memes/byuser/{id}")
    public ResponseEntity<?> getMemesByUser(@PathVariable("id") int id) {
        List<MemeDTO> memeDTOs = new ArrayList<>();
        for (Meme meme : memeServ.getAll()) {
            if (meme.getUserId()==id) {
                MemeDTO memeDTO = memeMapper.memeToMemeDTO(meme);
                memeDTOs.add(memeDTO);
                return ResponseEntity.ok().body(memeDTOs);
            } 
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con ID " + id + " no encontrado.");
    }

    @PostMapping("/memes/add")
    public MemeDTO save(@RequestBody Meme meme) throws Exception {
        MemeDTO memeDTO = memeMapper.memeToMemeDTO(meme);
        memeServ.SaveOrUpdate(meme);
        return memeDTO;
    }

    @GetMapping("/memes/delete")
    public ResponseEntity<String> delete(@PathVariable("id") int id) {
        if (memeServ.getById(id).isPresent()) {
            memeServ.Delete(id);
            return ResponseEntity.ok().body("Meme eliminado de la base de datos.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meme con ID " + id + " no encontrado.");
        }
    }
    
}
