# 0000

### 스프링 핵심
IOC , DI , AOP :

* "테스트의 용의성", "느슨한 결함" 에 중점
* 초기 테스트의 어려움을 해결하기 위해 등장하였다.

### IOC (Inversion of Control)
    Java 객체를 new 로 생성하여 개발하는 것이 아닌 Spring 에 맡긴다.
    즉 개발자에서 -> 프레임워크로 제어의 객체관리의 권한이 넘어 갔음 으로 "제어의 역전" 이라고 한다.

### DI  (Dependency Injection)
    - 의존성으로 부터 격리되어 테스트에 용이
    - 코드를 확장하거나 변경 할 때 영향을 최소화 한다 (추상화)
    - 순환참조를 막을 수 있다.

### AOP (Aspect Oriented Programming)
    관점지향 프로그램
    - input output 의 데이터 값 확인 가능



* 주요 어노테이션
![image](https://user-images.githubusercontent.com/79305451/131214206-4a75d3a0-cc65-4df9-bcc7-aa901f414255.png)
