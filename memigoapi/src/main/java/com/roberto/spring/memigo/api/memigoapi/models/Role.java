package com.roberto.spring.memigo.api.memigoapi.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * Representa un rol en el sistema.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Roles")
public class Role {
    
    /** Identificador único del rol. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /** Nombre del rol. */
    @Column(name = "name", unique = true)
    private String name;

    @JsonIgnoreProperties({"roles"})
    @ManyToMany(mappedBy = "roles")
    private List<User> users;
       
}
