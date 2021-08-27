package com.seung.mypage.controller;

import com.seung.mypage.domain.User;
import com.seung.mypage.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/api/auth")
@RestController
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        System.out.println("login");
        return ResponseEntity.ok(authService.loginUser(user));
    }
    @PostMapping("/join")
    public ResponseEntity<?> joinUser(@RequestBody User user){
        System.out.println("join");
        return ResponseEntity.ok(authService.joinUser(user));
    }
    @GetMapping("/test")
    public void test(){
        System.out.println("test");
    }
}
