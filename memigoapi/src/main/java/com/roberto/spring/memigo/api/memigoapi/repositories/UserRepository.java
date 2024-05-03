package com.roberto.spring.memigo.api.memigoapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.roberto.spring.memigo.api.memigoapi.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
    
    boolean existsByUid(String uid);
    Optional<User> findByUid(String uid);
    
}
