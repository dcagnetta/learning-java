package com.learning.udacity.helloworld.controller;

import com.learning.udacity.helloworld.data.SessionRepository;
import com.learning.udacity.helloworld.entity.Session;
import com.learning.udacity.helloworld.models.CreateSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/session")
public class SessionController {

    @Autowired
    SessionRepository repository;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody CreateSession command){
        // save a single Customer
        repository.save(new Session(command.getName()));
    }

    @GetMapping()
    public List<Session> findAll(){
        List<Session> response = repository.findAll();
        return response;
    }

}
