package com.learning.udacity.helloworld.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Estimate {

    @Id
    Long id;

    @ManyToOne
    @JoinColumn(name = "estimator_id")
    Estimator estimator;

    @ManyToOne
    @JoinColumn(name = "estimate_item_id")
    EstimationItem estimationItem;


    private double confidence;
    private Date startDate;
    private Date endDate;
}
