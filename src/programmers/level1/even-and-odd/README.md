# 메모 - [짝수와 홀수](https://school.programmers.co.kr/learn/courses/30/lessons/12937)

> [대상 소스 코드](./solution.js#L4)

Javascript는 조건절, 반복문 등 불리언 값이 필요한 곳에서 형 변환을 이용해 특정 값을 불리언 값으로 변환한다.

[**거짓같은 값**(Falsy or Falsey)](https://developer.mozilla.org/ko/docs/Glossary/Falsy)은
불리언 문맥에서 `false`로 평가 되는 값이다.

숫자 0은 `false`로 평가되고 숫자 1은 `true`로 평가된다.

따라서 n을 2로 나누어 떨어지면 0이 나오면 `false`로 평가되고 떨어지지 않고 1이 나오면 `true`로 평가된다.

```javascript
function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}
```

`num % 2 == 0`처럼 조건을 주면 짝수가 참인지 체크하는 것이 된다.

- reference: [거짓같은 값 - MDN](https://developer.mozilla.org/ko/docs/Glossary/Falsy)
