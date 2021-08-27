package com.seung.mypage.service;

import com.seung.mypage.domain.User;
import com.seung.mypage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final UserRepository userRepository;

    public String loginUser(User user){
        return user.getEmail();
    }

    public User joinUser(@RequestBody User user){

        return userRepository.save(user.builder().username(user.getUsername()).password(user.getPassword()).build());
    }

}
