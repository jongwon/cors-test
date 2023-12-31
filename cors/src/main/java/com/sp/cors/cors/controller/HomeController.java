package com.sp.cors.cors.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {


    @GetMapping(value="/greeting")
    public String hello(){
        return "Hello World!";
    }

}
