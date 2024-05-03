package com.roberto.spring.memigo.api.memigoapi.models;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
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
    @Column(name = "creation_date")
    private Date creationDate;

    /** Lista de roles del usuario. */
    @JsonIgnoreProperties({"users"})
    @ManyToMany
    @JoinTable(
        name = "users_roles",
        joinColumns = @JoinColumn(name="id_user"),
        inverseJoinColumns = @JoinColumn(name="id_role"),
        uniqueConstraints = { @UniqueConstraint(columnNames = {"id_user", "id_role"})}
    )
    private List<Role> roles;

    @Transient
    private boolean admin;

}
