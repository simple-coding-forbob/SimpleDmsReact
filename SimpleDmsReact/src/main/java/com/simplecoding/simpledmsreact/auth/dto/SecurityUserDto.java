package com.simplecoding.simpledmsreact.auth.dto;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
public class SecurityUserDto extends User  {

    private final Long eno;

    public SecurityUserDto(String email, String password, Collection<? extends GrantedAuthority> authorities, Long eno) {
        super(email, password, authorities);
        this.eno=eno;
    }
}
