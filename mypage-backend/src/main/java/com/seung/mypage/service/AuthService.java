package com.seung.mypage.service;

import com.seung.mypage.domain.User;
import com.seung.mypage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final UserRepository userRepository;

    public String loginUser(User user){
        return user.getEmail();
    }

}
