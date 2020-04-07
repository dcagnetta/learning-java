package com.learning.udacity.helloworld.controller;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class DirectMessage {
    private String sender;
    private String receiver;
}
