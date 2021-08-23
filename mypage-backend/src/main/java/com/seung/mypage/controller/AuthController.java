package com.seung.mypage.controller;

import com.seung.mypage.domain.User;
import com.seung.mypage.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api/auth")
@RestController
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(String username){
        return ResponseEntity.ok(authService.loginUser(username));
    }
}
