package com.roberto.spring.memigo.api.memigoapi.DTOs;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemeDTO {
    
    private int memeId;
    private int userId;
    private String meme;
    private String postDesc;
    private int likes;
    private Date postDate;
    
}
