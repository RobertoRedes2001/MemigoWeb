package com.roberto.spring.memigo.api.memigoapi.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.roberto.spring.memigo.api.memigoapi.models.User;
import com.roberto.spring.memigo.api.memigoapi.repositories.UserRepository;
import com.roberto.spring.memigo.api.memigoapi.security.CustomUserDetails;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRep;

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String uid) throws UsernameNotFoundException {
        Optional<User> userOptional = userRep.findByUid(uid);

        if(userOptional.isEmpty()){
            throw new UsernameNotFoundException(String.format("Usuario %s no existe en el sistema!", uid));
        }

        User user = userOptional.orElseThrow();

        List<GrantedAuthority> authorities = user.getRoles().stream()
        .map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());

        return new CustomUserDetails(user.getUid(),user.getUsername(),user.getPassword(),true,true,true,true,authorities);
    }
    
}
