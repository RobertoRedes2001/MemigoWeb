package com.roberto.spring.memigo.api.memigoapi.models;

import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "templates")
public class Template {
    
    /** Identificador único de la plantilla. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "templateId")
    private int templateId;

    /** Contenido de la plantilla. */
    @Column(name = "template")
    private String template;

}
