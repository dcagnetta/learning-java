package com.learning.udacity.helloworld.servlet;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

/*
* Filter is a component that is used to preprocessing and postprocessing requests. It can be used to validate, encrypt/decrypt, log requests.
* For instance, it can filter out request if it contains some invalid content, or ignore requests that do not contain required request parameter.
* */
@WebFilter(filterName="helloFilter", urlPatterns="/helloServlet")
public class HelloFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("Executing doFilter method");
        chain.doFilter(request, response);
        System.out.println("Done executing doFilter method");
    }
}
