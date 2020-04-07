package com.learning.udacity.helloworld.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
* Servlets act like middleware
* Used to extend the capabilities of servers that host applications accessed by means of a request-response programming model.
 * */
@WebServlet(name = "helloServlet", urlPatterns = "/helloServlet")
public class HelloServlet  extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Running Hello Servlet doGet method");
    }
}
