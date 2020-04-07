package com.learning.udacity.helloworld.data;
import com.learning.udacity.helloworld.entity.Session;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SessionRepository extends CrudRepository<Session, Long> {
    List<Session> findByName(String name);
    List<Session> findAll();
}

