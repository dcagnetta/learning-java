package com.learning.udacity.helloworld.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import com.learning.udacity.helloworld.models.Notification;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/notification")
    @SendTo("/topic/notification")
    public Notification sendNotification(String payload) {
        return new Notification(payload);
    }
}
