package com.roberto.spring.memigo.api.memigoapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.roberto.spring.memigo.api.memigoapi.models.Meme;
import com.roberto.spring.memigo.api.memigoapi.repositories.MemeRepository;

@Service
public class MemeService {
    
    /** Repositorio de memes. */
    @Autowired
    MemeRepository memeRep;
 
    /**
    * Obtiene todos los memes.
    * @return Una lista de todos los memes.
    */
    public List<Meme> getAll(){
        return memeRep.findAll();
    }
 
    /**
    * Obtiene un usuario por su identificador único.
    * @param id El identificador único del meme.
    * @return Un meme opcional.
    */
    public Optional<Meme> getById(int id){
        return memeRep.findById(id);
    }
 
    /**
    * Guarda o actualiza un meme.
    * @param meme El meme a guardar o actualizar.
    */
    public void SaveOrUpdate(@RequestBody Meme meme){
        memeRep.save(meme);
    }
 
    /**
    * Elimina un meme por su identificador único.
    * @param id El identificador único del meme a eliminar.
    */
    public void Delete(int id){
        memeRep.deleteById(id);
    }    
}
