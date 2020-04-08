package com.learning.udacity.helloworld.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements  WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // enable a simple memory-based message broker to carry the greeting
        // messages back to the client on destinations prefixed with /topic
        config.enableSimpleBroker("/topic", "/queue" ,"/user");        // This prefix will be used to define all the message mappings.
        // For example, /app/notification is the endpoint that the MessageController.sendNotification() method is mapped to handle.
        config.setApplicationDestinationPrefixes("/app");
        config.setUserDestinationPrefix("/user");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // registers endpoint, enabling SockJS fallback options so that alternate transports
        // can be used if WebSocket is not available.
        registry.addEndpoint("/websocket-demo").withSockJS();
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {

            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {

                var accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);

                /*
                *  Sets the Principal to the connected user
                * */
                if (accessor != null && StompCommand.CONNECT.equals(accessor.getCommand())) {
                    String user = accessor.getFirstNativeHeader("user");
                    if (!StringUtils.isEmpty(user)) {
                        List<GrantedAuthority> authorities = new ArrayList<>();
                        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
                        Authentication auth = new UsernamePasswordAuthenticationToken(user, user, authorities);
                        SecurityContextHolder.getContext().setAuthentication(auth);
                        accessor.setUser(auth);
                    }
                }

                return message;
            }
        });
    }
}
