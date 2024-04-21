package com.roberto.spring.memigo.api.memigoapi.DTOs;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.roberto.spring.memigo.api.memigoapi.models.Meme;

@Mapper
public interface MemeMapper {
    
    MemeMapper mapper = Mappers.getMapper(MemeMapper.class);

    /**
     * Convierte un objeto de tipo Meme a un objeto de tipo MemeDTO.
     * @param meme El objeto Meme a convertir.
     * @return El objeto MemeDTO resultante.
     */
    @Mapping(target = "id", source = "id")
    @Mapping(target = "user", source = "user")
    @Mapping(target = "meme", source = "meme")
    @Mapping(target = "postDesc", source = "postDesc")
    @Mapping(target = "likes", source = "likes")
    @Mapping(target = "postDate", source = "postDate")
    MemeDTO memeToMemeDTO(Meme meme);

    /**
     * Convierte un objeto de tipo MemeDTO a un objeto de tipo Meme.
     * @param memeDTO El objeto MemeDTO a convertir.
     * @return El objeto Meme resultante.
     */
    @Mapping(target = "id", source = "id")
    @Mapping(target = "user", source = "user")
    @Mapping(target = "meme", source = "meme")
    @Mapping(target = "postDesc", source = "postDesc")
    @Mapping(target = "likes", source = "likes")
    @Mapping(target = "postDate", source = "postDate")
    Meme memeDTOToMeme(MemeDTO memeDTO);
}
