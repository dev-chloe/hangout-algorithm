# 메모 - [콜라츠 추측](https://school.programmers.co.kr/learn/courses/30/lessons/12943)

> [대상 소스 코드](./solution.js#L20-L23)

## while

`while`문은 **조건문이 참일 때 실행되는 반복문**이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.

```javascript
while (condition)
  statement
```

`condition`: **반복이 시작되기 전에 조건문은 참,거짓을 판단**받게 된다. 만약 조건문이 **참이라면, while문 안의 문장들이 실행**된다. 거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다.

`statement`: **조건문이 참일 때만 while문 속의 문장들이 실행**된다. 반복문 속에 여러개의 문장을 사용하고 싶다면 중괄호 { } 를 통해 문장들을 하나로 묶어야 한다.

```javascript
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

- reference: [while - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while)
