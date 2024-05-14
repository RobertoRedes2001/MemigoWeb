package com.roberto.spring.memigo.api.memigoapi.DTOs;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    
    private int id;
    private String uid;
    private String username;
    private String email;
    private String password;
    private String userpfp;
    private Date creationDate;
    
}
