# 메모 - [자연수 뒤집어 배열로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12932)

> [대상 소스 코드](./solution.map.js#L2)

## map()

`map()`는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

```javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

`callback`: 새로운 배열 요소를 생성하는 함수(필수)  

- `currentValue`: 처리할 현재 요소(필수)  
- `index`: 처리할 현재 요소의 인덱스  
- `array`: `map()`을 호출한 배열  
`thisArg`: `callback`을 실행할 때 `this`로 사용되는 값

반환 값은 **배열의 각 요소에 대해 실행한 `callback`의 결과를 모은 새로운 배열**이다.

`map`은 `callback` 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만든다.  
`callback` 함수는 (undefined도 포함해서) 배열 값이 들어있는 인덱스에 대해서만 호출된다. 즉, **값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않는다.**

```javascript
const numbers = [1, 4, 9];
const doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles [2, 8, 18]
// numbers [1, 4, 9]
```

- reference: [map() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
