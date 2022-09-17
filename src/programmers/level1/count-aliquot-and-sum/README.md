# 메모 - [약수의 개수와 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/77884)

> [대상 소스 코드](./solution.js#L7)

## Number.isInteger()

`Number.isInteger()`는 주어진 값이 정수인지 판별한다.

```javascript
Number.isInteger(value)
```

`value`: 정수인지 확인하려는 값.

반환 값은 주어진 값의 정수의 여부를 나타내는 `Boolean`이다.

```javascript
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```

- reference: [Number.isInteger() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
