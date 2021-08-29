package com.seung.mypage.aop;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class DecodeAop {

//    @Pointcut("execution(* com.seung.mypage.controller..*.*(..))")
    private void cut(){}
//    @Pointcut("@annotation(com.seung.mypage.annotation.Timer)")
    private void enableDecode(){}


}
