package com.roberto.spring.memigo.api.memigoapi.models;

import java.util.Date;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Users")
public class User {

    /** Identificador único del usuario. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
 
    /** Arroba del usuario. */
    @Column(name = "uid")
    private String uid;

    /** Nombre del usuario. */
    @Column(name = "username")
    private String username;

    /** Correo electrónico del usuario. */
    @Column(name = "email")
    private String email;

    /** Contraseña del usuario. */
    @Column(name = "password")
    private String password;

    /** Imagen de perfil del usuario. */
    @Column(name = "userpfp")
    private String userpfp;

    /** Fecha de creación del usuario. */
    @Column(name = "creationDate")
    private Date creationDate;

}
