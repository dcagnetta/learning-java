package com.learning.udacity.helloworld.controller;

import com.learning.udacity.helloworld.models.Notification;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/notification")
    @SendTo("/topic/notification")
    public Notification sendNotification(String payload) {
        return new Notification("Success", "Hello World", payload);
    }
}
