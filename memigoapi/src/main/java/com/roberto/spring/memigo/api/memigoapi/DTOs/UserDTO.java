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
   
    /**
     * Encripta la contraseña utilizando el algoritmo MD5.
     * 
     * @throws Exception Si hay algún problema durante el proceso de encriptación.
     */
    public void encrypt() throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] messageDigest = md.digest(password.getBytes());
        BigInteger no = new BigInteger(1, messageDigest);
        String encryptedPassword = no.toString(16);
        while (encryptedPassword.length() < 32) {
            encryptedPassword = "0" + encryptedPassword;
        }
        this.password = encryptedPassword;
    }
    
}
