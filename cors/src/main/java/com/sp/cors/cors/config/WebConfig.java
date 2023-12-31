package com.sp.cors.cors.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

//@Configuration
public class WebConfig implements WebMvcConfigurer {


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/file/**")
                .allowedOrigins("http://localhost:3001", "http://localhost:3000") // Next.js 서버의 URL
                .allowedMethods("GET", "POST")
                .allowedHeaders("*")
                .allowCredentials(true)
        ;
    }


    // add spring security filter chain


}
