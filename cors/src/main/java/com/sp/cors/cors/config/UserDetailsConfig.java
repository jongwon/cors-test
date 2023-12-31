package com.sp.cors.cors.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserDetailsConfig {

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails user = User.builder()
            .username("jongwon")
            .password(passwordEncoder.encode("2222"))
            .roles("USER")
            .build();

        return new InMemoryUserDetailsManager(user);
    }
}
