# 메모 - [문자열을 정수로 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/12925)

> [대상 소스 코드](./solution.numbe.js#L2)
> [대상 소스 코드](./solution.parseInt.js#L2)

## Number

---
`Number`는 생성자로 숫자를 다루기 위해 상수와 메소드를 가지고 있다. 다른 타입의 값은 Number() 함수를 사용하여 숫자로 바꿀 수 있다.

`Number(value)`처럼 함수로 사용하면 문자열이나 다른 값을 Number 타입으로 변환하지만, 인수를 숫자로 변환할 수 없으면 NaN을 리턴한다.

## parseInt()

---
`parseInt()`는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환한다.

```javascript
parseInt(string)
parseInt(string, radix)
```

`string`: **파싱할 값**이다. 문자열이 아닐 경우 ToString 추상 연산을 사용해 문자열로 변환하며, 문자열의 선행 공백은 무시한다. (필수)
`radix`: string의 진수를 나타내는 2부터 36까지의 정수다. **기본 값이 10이 아니다**! Number 자료형이 아닌 경우 Number로 변환한다.

- reference: [Number - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- reference: [parseInt() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
