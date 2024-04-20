package com.roberto.spring.memigo.api.memigoapi.models;

import java.util.Date;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "memes")
public class Meme {

    /** Identificador único del meme. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "memeId")
    private int memeId;

    /** Identificador del usuario que publicó el meme. */
    @Column(name = "userId")
    private int userId;

    /** Contenido del meme. */
    @Column(name = "meme")
    private String meme;

    /** Descripción de la publicación del meme. */
    @Column(name = "postDesc")
    private String postDesc;

    /** Número de likes del meme. */
    @Column(name = "likes")
    private int likes;

    /** Fecha de publicación del meme. */
    @Column(name = "postDate")
    private Date postDate;

}
