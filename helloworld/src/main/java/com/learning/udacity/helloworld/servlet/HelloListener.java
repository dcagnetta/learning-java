package com.learning.udacity.helloworld.servlet;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/*
 * Listens to events in web container
 * E.g. creating session, creating property in session, Starting and Stopping
 * */
public class HelloListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent event) {
        System.out.println("Servlet Context Initialized");
    }

    @Override
    public void contextDestroyed(ServletContextEvent event) {
        System.out.println("Servlet Context Destroyed");
    }
}
