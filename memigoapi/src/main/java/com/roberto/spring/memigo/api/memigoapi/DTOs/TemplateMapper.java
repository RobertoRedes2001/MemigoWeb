package com.roberto.spring.memigo.api.memigoapi.DTOs;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.roberto.spring.memigo.api.memigoapi.models.Template;

@Mapper
public interface TemplateMapper {
    
    TemplateMapper mapper = Mappers.getMapper(TemplateMapper.class);

    /**
     * Convierte un objeto de tipo Template a un objeto de tipo TemplateDTO.
     * @param template El objeto Template a convertir.
     * @return El objeto TemplateDTO resultante.
     */
    @Mapping(target = "id", source = "id")
    @Mapping(target = "template", source = "template")
    TemplateDTO templateToTemplateDTO(Template template);

    /**
     * Convierte un objeto de tipo TemplateDTO a un objeto de tipo Template.
     * @param templateDTO El objeto TemplateDTO a convertir.
     * @return El objeto Template resultante.
     */
    @Mapping(target = "id", source = "id")
    @Mapping(target = "template", source = "template")
    Template templateDTOToTemplate(TemplateDTO templateDTO);
}
