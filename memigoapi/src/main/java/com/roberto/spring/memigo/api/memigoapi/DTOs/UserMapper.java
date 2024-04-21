package com.roberto.spring.memigo.api.memigoapi.DTOs;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.roberto.spring.memigo.api.memigoapi.models.User;

@Mapper
public interface UserMapper {
    
    // Instancia del mapper.
    UserMapper mapper = Mappers.getMapper(UserMapper.class);

    /**
     * Convierte un objeto de tipo User a un objeto de tipo UserDTO.
     * @param user El objeto User a convertir.
     * @return El objeto UserDTO resultante.
     */
    @Mapping(target = "id", source = "id")
    @Mapping(target = "uid", source = "uid")
    @Mapping(target = "username", source = "username")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "password", source = "password")
    @Mapping(target = "userpfp", source = "userpfp")
    @Mapping(target = "creationDate", source = "creationDate")
    UserDTO userToUserDTO(User user);

    /**
     * Convierte un objeto de tipo UserDTO a un objeto de tipo User.
     * @param userDTO El objeto UserDTO a convertir.
     * @return El objeto User resultante.
     */
    @Mapping(target = "id", source = "id")
    @Mapping(target = "uid", source = "uid")
    @Mapping(target = "username", source = "username")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "password", source = "password")
    @Mapping(target = "userpfp", source = "userpfp")
    @Mapping(target = "creationDate", source = "creationDate")
    User userDTOToUser(UserDTO userDTO);

}
