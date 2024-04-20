package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roberto.spring.memigo.api.memigoapi.DTOs.UserDTO;
import com.roberto.spring.memigo.api.memigoapi.models.User;

/**
 * Controlador para manejar las solicitudes relacionadas con los usuarios.
 */
@RestController
@RequestMapping("/api")
public class UserController implements IUserController {

    @Override
    public List<UserDTO> getAll() {
        throw new UnsupportedOperationException("Unimplemented method 'getAll'");
    }

    @Override
    public ResponseEntity<?> getUser(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'getUser'");
    }

    @Override
    public ResponseEntity<?> getUserByName(String name) {
        throw new UnsupportedOperationException("Unimplemented method 'getUserByName'");
    }

    @Override
    public ResponseEntity<?> getUserByEmail(String email) {
        throw new UnsupportedOperationException("Unimplemented method 'getUserByEmail'");
    }

    @Override
    public UserDTO save(User usu) throws Exception {
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }

    @Override
    public ResponseEntity<?> update(User usu) throws Exception {
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public ResponseEntity<String> delete(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }
    
}
