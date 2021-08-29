package com.seung.mypage.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Aspect
@Component
public class ParameterAop {

//    @Pointcut("execution(* com.seung.mypage.controller..*.*(..))")
    private void cut(){
    }
//    @Before("cut()")
    public void before(JoinPoint joinPoint){

        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        Method method = methodSignature.getMethod();
        System.out.println("method: " + method.getName());

        Object[] args = joinPoint.getArgs();
        for(Object o : args){
            System.out.println("type: " + o.getClass().getSimpleName());
            System.out.println("value: " + o);
        }
    }
//    @AfterReturning(value = "cut()", returning = "returnObj")
    public void afterReturn(JoinPoint joinPoint, Object returnObj){
        System.out.println("returnObj: " + returnObj);
    }
}
