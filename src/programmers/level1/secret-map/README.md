# 메모 - [비밀 지도](https://school.programmers.co.kr/learn/courses/30/lessons/17681)

> [대상 소스 코드](./solution.js#L28)

## 비트 연산자(bitwise operator)`|`

`비트 연산자(|)`는 피연산자 중 하나 또는 두 피연산자의 해당 비트가 1인 각 비트 위치에서 1을 반환한다.
대응되는 비트 중에서 하나라도 1이면 1을 반한다. (비트 OR 연산)

```javascript
a|b
```

피연산자는 32비트 정수로 변환되고 일련의 비트(0과 1)로 표현된다.
32비트보다 큰 숫자는 가장 중요한 비트를 삭제한다.

```javascript
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
```

- reference: [비트 연산자(bitwise operator) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- reference: [비트 연산자(bitwise operator) - TCPschool](https://tcpschool.com/c/c_operator_bitwise)
