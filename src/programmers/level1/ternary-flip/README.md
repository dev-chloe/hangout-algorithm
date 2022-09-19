# 메모 - [3진법 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/68935)

> [대상 소스 코드](./solution.js)

## toString()

`toString()`은 문자열을 반환하는 object의 대표적인 방법이다.

```javascript
obj.toString()
```

모든 객체에는 객체가 텍스트 값으로 표시되거나 객체가 문자열이 예상되는 방식으로 참조 될 때 자동으로 호출되는 `toString()` 메서드가 있다.

숫자 및 BigInts의 경우 `toString()`은 선택적으로 기수(radix)를 매개변수로 취한다. 기수의 값은 최소 2부터 36까지입니다.

기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있다.

```javascript
// 10진수를 2진수로 변환하는 예
let baseTenInt = 10;
console.log(baseTenInt.toString(2));
// "1010"
```

- reference: [toString() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
