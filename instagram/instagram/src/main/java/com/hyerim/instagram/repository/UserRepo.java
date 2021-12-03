package com.hyerim.instagram.repository;

import com.hyerim.instagram.entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<Users, Integer> {

    Users save(Users users);

    Users findByUserId(String userId);

}
