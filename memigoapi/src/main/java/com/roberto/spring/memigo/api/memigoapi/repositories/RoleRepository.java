package com.roberto.spring.memigo.api.memigoapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.roberto.spring.memigo.api.memigoapi.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
    
    Optional<Role> findByName(String name);
}
