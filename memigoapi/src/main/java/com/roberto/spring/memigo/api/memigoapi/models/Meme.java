package com.roberto.spring.memigo.api.memigoapi.models;

import java.util.Date;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "memes")
public class Meme {

    /** Identificador único del meme. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /** Identificador del usuario que publicó el meme. */
    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;

    /** Contenido del meme. */
    @Column(name = "meme")
    private String meme;

    /** Descripción de la publicación del meme. */
    @Column(name = "post_desc")
    private String postDesc;

    /** Número de likes del meme. */
    @Column(name = "likes")
    private int likes;

    /** Fecha de publicación del meme. */
    @Column(name = "post_date")
    private Date postDate;

}
