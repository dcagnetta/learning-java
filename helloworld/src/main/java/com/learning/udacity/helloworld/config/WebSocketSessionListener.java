package com.learning.udacity.helloworld.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

@Slf4j
@Component
public class WebSocketSessionListener {

    @EventListener
    public void handleSessionConnectedEvent(SessionConnectedEvent event) {
        log.info("SessionConnectedEvent triggered: " + event.getTimestamp());
    }

    /*
    * https://stackoverflow.com/questions/54330744/spring-boot-websocket-how-to-get-notified-on-client-subscriptions
    *  e.g. to observe the groups and post notification to the user upon changes over WebSocket.
    * */
    @EventListener
    public void handleSessionSubscribeEvent(SessionSubscribeEvent event) {
        GenericMessage message = (GenericMessage) event.getMessage();
        String simpDestination = (String) message.getHeaders().get("simpDestination");

        if (simpDestination.startsWith("/topic/group/1")) {
            // do stuff
        }
    }
}
