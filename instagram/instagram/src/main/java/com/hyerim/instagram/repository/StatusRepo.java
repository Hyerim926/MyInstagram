package com.hyerim.instagram.repository;

import com.hyerim.instagram.entity.Status;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface StatusRepo extends CrudRepository<Status, Integer> {

    Status save(Status save);

    ArrayList<Status> findAll();
}
