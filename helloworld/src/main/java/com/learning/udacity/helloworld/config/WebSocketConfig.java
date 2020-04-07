package com.learning.udacity.helloworld.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements  WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // enable a simple memory-based message broker to carry the greeting
        // messages back to the client on destinations prefixed with /topic
        config.enableSimpleBroker("/topic");
        // This prefix will be used to define all the message mappings.
        // For example, /app/notification is the endpoint that the MessageController.sendNotification() method is mapped to handle.
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // registers endpoint, enabling SockJS fallback options so that alternate transports
        // can be used if WebSocket is not available.
        registry.addEndpoint("/websocket-demo").withSockJS();
    }
}
