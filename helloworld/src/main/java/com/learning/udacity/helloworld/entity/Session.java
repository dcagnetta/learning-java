package com.learning.udacity.helloworld.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Session {
    @Id
    @Column(name = "session_id")
    private UUID id;

    //@Column(name = "name")
    private String name;

    @OneToMany(mappedBy="session")   // property name in Person entity
    private Set<Estimator> estimators;

    @OneToMany(mappedBy="session")   // property name in EstimationItem entity
    private Set<EstimationItem> items;

    public Session(UUID id, String name) {
        this.id = id;
        this.name = name;
    }
}
