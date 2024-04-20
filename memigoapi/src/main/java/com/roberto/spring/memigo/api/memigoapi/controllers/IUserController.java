package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.roberto.spring.memigo.api.memigoapi.DTOs.UserDTO;
import com.roberto.spring.memigo.api.memigoapi.models.User;

public interface IUserController {
    
    public List<UserDTO> getAll();

    public ResponseEntity<?> getUser(@PathVariable("id") int id);
    
    public ResponseEntity<?> getUserByName(@RequestParam("name") String name);

    public ResponseEntity<?> getUserByEmail(@RequestParam("email") String email);

    public UserDTO save(@RequestBody User usu) throws Exception;

    public ResponseEntity<?> update(@RequestBody User usu) throws Exception;

    public ResponseEntity<String> delete(@PathVariable("id") int id);
    
}
