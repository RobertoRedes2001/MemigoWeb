package com.roberto.spring.memigo.api.memigoapi.DTOs;

import java.util.Date;

import com.roberto.spring.memigo.api.memigoapi.models.User;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemeDTO {
    
    private int id;
    private User user;
    private String meme;
    private String postDesc;
    private int likes;
    private Date postDate;
    private int userId;
    
}
