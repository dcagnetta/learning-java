package com.learning.udacity.helloworld.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Estimate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "estimator_id")
    private Estimator estimator;

    @ManyToOne
    @JoinColumn(name = "estimate_item_id")
    private EstimationItem estimationItem;

    private int confidence;
    private int timeStart;
    private int timeEnd;
    private String timePeriod;

    public Estimate(int confidence, int timeStart, int timeEnd, String timePeriod, EstimationItem estimationItem, Estimator estimator) {
        this.confidence = confidence;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.timePeriod = timePeriod;
        this.estimationItem = estimationItem;
        this.estimator = estimator;
    }
}
