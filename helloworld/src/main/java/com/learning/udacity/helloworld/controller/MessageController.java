package com.learning.udacity.helloworld.controller;

import com.learning.udacity.helloworld.models.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.security.Principal;

@Controller
public class MessageController {

    @Autowired
    private SimpMessagingTemplate sender;

    @MessageMapping("/notification")
    @SendTo("/topic/notification")
    public Notification sendNotification(String payload) {
        return new Notification("Success", "Hello World", payload);
    }

    @MessageMapping("/hello")
    public void greeting(Principal principal, DirectMessage message) throws  Exception {
         var userMessage = "Hello, " + message.getReceiver() + " from " + message.getSender();
        sender.convertAndSendToUser(message.getReceiver(), "/queue/user-reply", userMessage);
    }
}
