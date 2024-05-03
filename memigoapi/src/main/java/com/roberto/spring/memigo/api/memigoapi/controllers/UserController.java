package com.roberto.spring.memigo.api.memigoapi.controllers;

import java.util.ArrayList;
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

import com.roberto.spring.memigo.api.memigoapi.DTOs.UserDTO;
import com.roberto.spring.memigo.api.memigoapi.DTOs.UserMapper;
import com.roberto.spring.memigo.api.memigoapi.DTOs.UserMapperImpl;
import com.roberto.spring.memigo.api.memigoapi.models.User;
import com.roberto.spring.memigo.api.memigoapi.services.UserServices;

/**
 * Controlador para manejar las solicitudes relacionadas con los usuarios.
 */
@RestController
@RequestMapping("/api")
public class UserController implements IUserController {

    @Autowired
    private UserServices userServ;

    private UserMapper userMapper = new UserMapperImpl();

    @GetMapping("/users")
    public List<UserDTO> getAll() {
        List<UserDTO> userDTOs = new ArrayList<>();
        for (User user : userServ.getAll()) {
            UserDTO userDTO = userMapper.userToUserDTO(user);
            userDTO.setPassword(null);
            userDTOs.add(userDTO);
        }
        return userDTOs;
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUser(@PathVariable("id") int id) {
        if (userServ.getById(id).isPresent()) {
            UserDTO user = userMapper.userToUserDTO(userServ.getById(id).get());
            user.setPassword(null);
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con ID " + id + " no encontrado.");
        }
    }

    @GetMapping("/users/byuid")
    public ResponseEntity<?> getUserByUID(@PathVariable("uid") String uid) {
        UserDTO userDTO = new UserDTO();
        for (User user : userServ.getAll()) {
            if(uid.equals(user.getUid())){
                userDTO = userMapper.userToUserDTO(user);
                userDTO.setPassword(null);
                return ResponseEntity.ok().body(userDTO);
            }    
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario " + uid + " no encontrado."); 
    }

    @GetMapping("/users/byname")
    public ResponseEntity<?> getUserByName(@PathVariable("name") String name) {
        String n1 = name.replaceAll("\\s", "").toLowerCase();
        System.out.println(n1);
        List<UserDTO> userDTOs = new ArrayList<>();
        for (User user : userServ.getAll()) {
            String n2 = user.getUsername().toLowerCase().replaceAll("\\s", "");
            System.out.println(n2);
            if(n1.equals(n2)){
                UserDTO userDTO = userMapper.userToUserDTO(user);
                userDTO.setPassword(null);
                userDTOs.add(userDTO);
            }    
        }
        if(!userDTOs.isEmpty()){
            return ResponseEntity.ok().body(userDTOs);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con nombre " + name + " no encontrado."); 
        }
    }

    @PostMapping("users/add")
    public UserDTO save(@RequestBody User usu) throws Exception {
        UserDTO user = userMapper.userToUserDTO(usu);
        userServ.SaveOrUpdate(usu);
        return user;
    }

    @PutMapping("users/update")
    public ResponseEntity<?> update(@RequestBody Map<String, String> user) throws Exception {
        int id = Integer.parseInt(user.get("id"));
        String userpfp = user.get("userpfp");
        String username = user.get("username");
        User userUpd = userServ.getById(id).get();
        userUpd.setUsername(username);
        userUpd.setUserpfp(userpfp);
        userServ.SaveOrUpdate(userUpd);
        userUpd.setPassword(null);
        return ResponseEntity.ok().body(userUpd);
    }


    @DeleteMapping("users/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") int id) {
        if (userServ.getById(id).isPresent()) {
            userServ.Delete(id);
            return ResponseEntity.ok().body("Usuario eliminado de la base de datos.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con ID " + id + " no encontrado.");
        }
    }
    
}
