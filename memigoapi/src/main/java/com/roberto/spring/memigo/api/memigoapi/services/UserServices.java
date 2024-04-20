package com.roberto.spring.memigo.api.memigoapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.roberto.spring.memigo.api.memigoapi.models.User;
import com.roberto.spring.memigo.api.memigoapi.repositories.UserRepository;

/**
 * Clase que proporciona servicios relacionados con los usuarios.
 */
@Service
public class UserServices {

    /** Repositorio de usuarios. */
    @Autowired
    UserRepository userRep;

    /**
     * Obtiene todos los usuarios.
     * @return Una lista de todos los usuarios.
     */
    public List<User> getAll(){
        return userRep.findAll();
    }

    /**
     * Obtiene un usuario por su identificador único.
     * @param id El identificador único del usuario.
     * @return Un usuario opcional.
     */
    public Optional<User> getById(int id){
        return userRep.findById(id);
    }

    /**
     * Guarda o actualiza un usuario.
     * @param usu El usuario a guardar o actualizar.
     */
    public void SaveOrUpdate(@RequestBody User usu){
        userRep.save(usu);
    }

    /**
     * Elimina un usuario por su identificador único.
     * @param id El identificador único del usuario a eliminar.
     */
    public void Delete(int id){
        userRep.deleteById(id);
    }
}
