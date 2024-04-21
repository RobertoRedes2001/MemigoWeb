package com.roberto.spring.memigo.api.memigoapi.models;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "templates")
public class Template {
    
    /** Identificador único de la plantilla. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /** Contenido de la plantilla. */
    @Column(name = "template")
    private String template;

}
