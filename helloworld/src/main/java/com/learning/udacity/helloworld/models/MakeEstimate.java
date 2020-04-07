package com.learning.udacity.helloworld.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MakeEstimate {
    private Long estimatorId;
    private Long itemId;

    private int confidence;
    private int timeStart;
    private int timeEnd;
    private String timePeriod;
}
