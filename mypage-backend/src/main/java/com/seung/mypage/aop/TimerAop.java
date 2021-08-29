package com.seung.mypage.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Aspect
@Component
public class TimerAop {

//    @Pointcut("execution(* com.seung.mypage.controller..*.*(..))")
    private void cut(){}
//    @Pointcut("@annotation(com.seung.mypage.annotation.Timer)")
    private void enableTimer(){}
//    @Around("cut() && enableTimer()")
    public void around(ProceedingJoinPoint joinPoint) throws Throwable {

        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
//        proceed 호출 = 실질적 메서드 실행   (위,아래로 실행 전/후)
        Object result = joinPoint.proceed();

        stopWatch.stop();
        System.out.println("total time: " + stopWatch.getTotalTimeSeconds());
    }
}
