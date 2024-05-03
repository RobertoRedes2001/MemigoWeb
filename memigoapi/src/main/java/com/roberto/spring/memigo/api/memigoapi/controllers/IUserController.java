package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.roberto.spring.memigo.api.memigoapi.DTOs.UserDTO;
import com.roberto.spring.memigo.api.memigoapi.models.User;

public interface IUserController {
    
    public List<UserDTO> getAll();

    public ResponseEntity<?> getUser(@PathVariable("id") int id);
    
    public ResponseEntity<?> getUserByUID(@RequestParam("uid") String uid);

    public ResponseEntity<?> getUserByName(@RequestParam("name") String name);

    public UserDTO save(@RequestBody User usu) throws Exception;

    public ResponseEntity<?> update(Map<String, String> user) throws Exception;

    public ResponseEntity<String> delete(@PathVariable("id") int id);
    
}
