package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeDTO;
import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeMapperImpl;
import com.roberto.spring.memigo.api.memigoapi.DTOs.MemeMapper;
import com.roberto.spring.memigo.api.memigoapi.models.Meme;
import com.roberto.spring.memigo.api.memigoapi.services.MemeService;
import com.roberto.spring.memigo.api.memigoapi.services.UserServices;

/**
 * Controlador para manejar las solicitudes relacionadas con los memes.
 */
@RestController
@RequestMapping("/api")
public class MemeController implements IMemeController{

    @Autowired
    private MemeService memeServ;

    @Autowired
    private UserServices userServ;

    private MemeMapper memeMapper = new MemeMapperImpl();

    @GetMapping("/memes")
    public List<MemeDTO> getAll() {
        List<MemeDTO> memeDTOs = new ArrayList<>();
        for (Meme meme : memeServ.getAll()) {
            MemeDTO memeDTO = memeMapper.memeToMemeDTO(meme);
            memeDTO.setUserId(memeDTO.getUser().getId());
            memeDTO.setUser(null);
            memeDTOs.add(memeDTO);
        }
        return memeDTOs;
    }

    @GetMapping("/memes/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        if (memeServ.getById(id).isPresent()) {
            MemeDTO memeDTO = memeMapper.memeToMemeDTO(memeServ.getById(id).get());
            memeDTO.setUser(null);
            return ResponseEntity.ok().body(memeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meme con ID " + id + " no encontrado.");
        }
    }

    @GetMapping("/memes/byuser/{id}")
    public ResponseEntity<?> getMemesByUser(@PathVariable("id") int id) {
        List<MemeDTO> memeDTOs = new ArrayList<>();
        for (Meme meme : memeServ.getAll()) {
            System.out.println(meme.getUser().getId());
            if (meme.getUser().getId()==id) {
                MemeDTO memeDTO = memeMapper.memeToMemeDTO(meme);
                memeDTO.setUserId(memeDTO.getUser().getId());
                memeDTO.setUser(null);
                memeDTOs.add(memeDTO);
            } 
        }
        if(memeDTOs.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con ID " + id + " no encontrado.");
        }else{
            return ResponseEntity.ok().body(memeDTOs);
        }
    }

    @PostMapping("/memes/add")
    public ResponseEntity<?> save(@RequestBody Map<String, String> request) throws Exception {
        int userid = Integer.parseInt(request.get("userId"));
        if(userServ.getById(userid).isPresent()){
            Meme meme = new Meme(0, userServ.getById(userid).get(), request.get("meme"), request.get("postDesc"), 0, new Date());
            MemeDTO memeDTO = memeMapper.memeToMemeDTO(meme);
            memeServ.SaveOrUpdate(meme);
            return ResponseEntity.ok().body(memeDTO);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con ID " + userid + " no encontrado.");
    }

    @PutMapping("/memes/like/{id}")
    public ResponseEntity<?> like(@PathVariable("id") int id) throws Exception {
        if(memeServ.getById(id).isPresent()){
            MemeDTO memeDTO = memeMapper.memeToMemeDTO(memeServ.getById(id).get());
            int likes = memeDTO.getLikes();
            memeDTO.setLikes(likes+1);
            Meme meme = memeMapper.memeDTOToMeme(memeDTO);
            memeServ.SaveOrUpdate(meme);
            return ResponseEntity.ok().body(memeDTO);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meme con ID " + id + " no encontrado.");
    }

    @PutMapping("/memes/dislike/{id}")
    public ResponseEntity<?> dislike(@PathVariable("id") int id) throws Exception {
        if(memeServ.getById(id).isPresent()){
            MemeDTO memeDTO = memeMapper.memeToMemeDTO(memeServ.getById(id).get());
            int likes = memeDTO.getLikes();
            memeDTO.setLikes(likes-1);
            Meme meme = memeMapper.memeDTOToMeme(memeDTO);
            memeServ.SaveOrUpdate(meme);
            return ResponseEntity.ok().body(memeDTO);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meme con ID " + id + " no encontrado.");
    }

    @DeleteMapping("/memes/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") int id) {
        if (memeServ.getById(id).isPresent()) {
            memeServ.Delete(id);
            return ResponseEntity.ok().body("Meme eliminado de la base de datos.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Meme con ID " + id + " no encontrado.");
        }
    }
    
}
