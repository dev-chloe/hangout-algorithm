# 메모 - [정수 제곱근 판별](https://school.programmers.co.kr/learn/courses/30/lessons/12934)

> [대상 소스 코드](./solution.Math.js)

## Math.sqrt()

`Math.sqrt()`는 숫자의 제곱근을 반환한다.

```javascript
Math.sqrt(x)
```

`x`: 숫자

반환 값은 주어진 숫자에 루트를 씌운다.(제곱근)  
만약 `x` 가 음수라면 `Math.sqrt()`는 `NaN`를 반환합니다.

```javascript
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
```

## Math.pow()

`Math.pow()`는 `base`에 `exponent`를 제곱한 값을 반환한다.

```javascript
Math.pow(base, exponent)
```

`base`: 밑 값  
`exponent`: `밑`을 제곱하기 위해서 사용하는 지수

반환 값은 주어진 밑 값을 주어진 지수 값으로 거듭제곱한 숫자 값이다.

```javascript
Math.pow(3, 2) // 9
Math.pow(3, 3) // 27
```

- reference: [Math.sqrt() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
- reference: [Math.pow() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
