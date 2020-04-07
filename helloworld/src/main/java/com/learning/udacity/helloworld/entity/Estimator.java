package com.learning.udacity.helloworld.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Estimator {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name="session_id", nullable=false)
    private Session session;

    @OneToMany(mappedBy = "estimator")
    Set<Estimate> estimates;
}