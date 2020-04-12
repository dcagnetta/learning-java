package com.learning.udacity.helloworld.controller;

import com.learning.udacity.helloworld.data.EstimateRepository;
import com.learning.udacity.helloworld.data.EstimationItemRepository;
import com.learning.udacity.helloworld.data.EstimatorRepository;
import com.learning.udacity.helloworld.data.SessionRepository;
import com.learning.udacity.helloworld.entity.Estimate;
import com.learning.udacity.helloworld.entity.EstimationItem;
import com.learning.udacity.helloworld.entity.Estimator;
import com.learning.udacity.helloworld.entity.Session;
import com.learning.udacity.helloworld.models.CreateEstimationItem;
import com.learning.udacity.helloworld.models.CreateSession;
import com.learning.udacity.helloworld.models.JoinSession;
import com.learning.udacity.helloworld.models.MakeEstimate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

// static imports


@RestController
@RequestMapping("/session")
public class SessionController {

    @Autowired
    SessionRepository sessionRepository;

    @Autowired
    EstimatorRepository estimatorRepository;

    @Autowired
    EstimationItemRepository itemRepository;

    @Autowired
    EstimateRepository estimateRepository;

    // http://localhost:8080/session/create
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Session> create(@RequestBody CreateSession command){
        // save a single Customer
        var entity = sessionRepository.save(new Session(command.getName()));
        return ok(entity);
    }

    // http://localhost:8080/session/
    @GetMapping()
    public ResponseEntity<List<Session>> findAll(){
        List<Session> sessions = sessionRepository.findAll();
        return new ResponseEntity<>(sessions, HttpStatus.OK);
    }

    /* ***************************************************************** */
    // TODO: move to own controller?
    /* ***************************************************************** */
    @PostMapping("/join")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody JoinSession command){
        var session = sessionRepository.findById(command.getSessionId());
        Estimator estimator = new Estimator(command.getEstimatorName(), session.get());
        estimatorRepository.save(estimator);
    }

    @PostMapping("/create-item")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody CreateEstimationItem command){
        var session = sessionRepository.findById(command.getSessionId());
        var item = new EstimationItem(command.getName(),command.getDescription(), session.get());
        itemRepository.save(item);
    }

    @PostMapping("/estimate")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody MakeEstimate command){
        var item = itemRepository.findById(command.getItemId());
        var estimator = estimatorRepository.findById(command.getEstimatorId());
        var estimate = new Estimate(
                command.getConfidence(),
                command.getTimeStart(),
                command.getTimeEnd(),
                command.getTimePeriod(),
                item.get(),
                estimator.get());
        estimateRepository.save(estimate);
    }

}
