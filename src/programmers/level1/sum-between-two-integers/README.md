# 메모 - [두 정수 사이의 합](https://school.programmers.co.kr/learn/courses/30/lessons/12912)

> [대상 소스 코드](./solution.js#L11)

## 가우스 공식

---
처음 숫자와, 마지막 숫자를 더한 합 : a + b
더할 숫자의 갯수: (a - b) + 1
두 수를 곱하여 나눈다.
((a + b) * ((a - b) + 1)) / 2

## Math.abs()

---
`Math.abs()`는 주어진 숫자의 절대값을 반환한다.

```javascript
Math.abs(x)
```

`x`: 숫자

빈 객체, 하나 이상의 요소를 가진 배열, 숫자가 아닌 문자열, undefined나 빈 매개변수를 받으면 NaN을 반환한다.
null, 빈 문자열이나 빈 배열을 제공하면 0을 반환한다.

- reference: [abs() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
