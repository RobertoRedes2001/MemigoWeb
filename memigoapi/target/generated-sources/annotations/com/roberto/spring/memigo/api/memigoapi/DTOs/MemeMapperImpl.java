package com.roberto.spring.memigo.api.memigoapi.DTOs;

import com.roberto.spring.memigo.api.memigoapi.models.Meme;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-21T11:10:24+0200",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.38.0.v20240325-1403, environment: Java 17.0.10 (Eclipse Adoptium)"
)
public class MemeMapperImpl implements MemeMapper {

    @Override
    public MemeDTO memeToMemeDTO(Meme meme) {
        if ( meme == null ) {
            return null;
        }

        MemeDTO memeDTO = new MemeDTO();

        memeDTO.setMemeId( meme.getMemeId() );
        memeDTO.setUserId( meme.getUserId() );
        memeDTO.setMeme( meme.getMeme() );
        memeDTO.setPostDesc( meme.getPostDesc() );
        memeDTO.setLikes( meme.getLikes() );
        memeDTO.setPostDate( meme.getPostDate() );

        return memeDTO;
    }

    @Override
    public Meme memeDTOToMeme(MemeDTO memeDTO) {
        if ( memeDTO == null ) {
            return null;
        }

        Meme meme = new Meme();

        meme.setMemeId( memeDTO.getMemeId() );
        meme.setUserId( memeDTO.getUserId() );
        meme.setMeme( memeDTO.getMeme() );
        meme.setPostDesc( memeDTO.getPostDesc() );
        meme.setLikes( memeDTO.getLikes() );
        meme.setPostDate( memeDTO.getPostDate() );

        return meme;
    }
}
