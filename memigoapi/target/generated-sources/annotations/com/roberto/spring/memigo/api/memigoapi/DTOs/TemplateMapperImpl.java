package com.roberto.spring.memigo.api.memigoapi.DTOs;

import com.roberto.spring.memigo.api.memigoapi.models.Template;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-21T11:10:32+0200",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.38.0.v20240325-1403, environment: Java 17.0.10 (Eclipse Adoptium)"
)
public class TemplateMapperImpl implements TemplateMapper {

    @Override
    public TemplateDTO templateToTemplateDTO(Template template) {
        if ( template == null ) {
            return null;
        }

        TemplateDTO templateDTO = new TemplateDTO();

        templateDTO.setTemplateId( template.getTemplateId() );
        templateDTO.setTemplate( template.getTemplate() );

        return templateDTO;
    }

    @Override
    public Template templateDTOToTemplate(TemplateDTO templateDTO) {
        if ( templateDTO == null ) {
            return null;
        }

        Template template = new Template();

        template.setTemplateId( templateDTO.getTemplateId() );
        template.setTemplate( templateDTO.getTemplate() );

        return template;
    }
}
