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
public class EstimationItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "estimate_item_id")
    private long id;

    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name="session_id", nullable=false)
    private Session session;

    @OneToMany(mappedBy = "estimationItem")
    Set<Estimate> ratings;

    public EstimationItem(String name, String description, Session session) {
        this.name = name;
        this.description = description;
        this.session = session;
    }
}
