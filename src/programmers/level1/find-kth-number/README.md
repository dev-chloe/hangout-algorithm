# 메모 - [K번째수](https://school.programmers.co.kr/learn/courses/30/lessons/42748)

> [대상 소스 코드](./solution.js#L19)

## sort()

```javascript
arr.sort([compareFunction])
```

`compareFunction`이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬된다.  
`compareFunction`이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬된다.

`compareFunction(a, b)`이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬하여 a가 먼저 온다.  
`compareFunction(a, b)`이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬한다.  
`compareFunction(a, b)`이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트한다.  
`compareFunction(a, b)`은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야 한다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않는다.

```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

문자열 대신 **숫자를 비교**하기 위해 compare 함수는 a에서 b를 뺄 수 있다.

```javascript
function compareNumbers(a, b) {
  return a - b;
}
```

```javascript
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

- reference: [sort() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
