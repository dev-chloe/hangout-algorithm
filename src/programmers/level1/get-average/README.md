# 메모 - [자릿수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/12931)

> [대상 소스 코드](./solution.js#L12)

`reduce`는 배열의 각 요소에 대해 callback을 실행하며 단 1개의 출력 결과를 만든다.

```javascript
array.reduce(callback(accumulator, currentValue[, index[, array]] )[, initialValue])
```

`reduce`는 4개의 인자를 가진다.

> 1. 누산기 (acc): 콜백의 반환값을 누적한다. (필수)
> 2. 현재 값 (cur): 처리할 현재 요소 (필수)
> 3. 현재 인덱스 (idx): 처리할 현재 요소의 인덱스로 `initialValue`를 제공한 경우 0, 아니면 1부터 시작한다.
> 4. 원본 배열 (src): `reduce()`를 호출한 배열

`reduce` 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 된다.

반환 값은 누적 **계산의 결과 값**이다.

```javascript
function solution(n) {
  return n.toString().split("").reduce((acc, cur) => {
    console.log(acc)
    return acc + Number(cur)
  };
}
solution(987)
// 초기값을 설정해주지 않으면 acc에 문자 9가 바로 들어가서 형 변환이 없다.
// 9
// 98
```

```javascript
function solution(n) {
  return n.toString().split("").reduce((acc, cur) => {
    console.log(acc)
    return  Number(acc) + Number(cur)
  };
}
solution(987)
// acc, cur 모두 Number()로 형 변환을 해주었으므로 초기값과 상관없이 된다.
// 9
// 98
```

```javascript
function solution(n) {
  return n.toString().split("").reduce((acc, cur) => {
    console.log(acc)
    return acc + Number(cur)
  }, 0);
}
solution(987)
// 0 > acc에 초기값 0 부터 들어가서 형 변환이 됨
// 9
// 17
```

- reference: [reduce() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
