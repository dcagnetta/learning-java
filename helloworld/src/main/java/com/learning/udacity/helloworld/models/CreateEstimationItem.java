package com.learning.udacity.helloworld.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateEstimationItem {
    private Long sessionId;
    private String name;
    private String description;
}
