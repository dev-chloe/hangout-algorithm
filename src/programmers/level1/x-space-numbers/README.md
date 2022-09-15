# 메모 - [x만큼 간격이 있는 n개의 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/12954)

> [대상 소스 코드](./solution.fill.js#L2)

## Array()

`Array()` 생성자는 새로운 `Array` 객체를 생성할 때 사용합니다.

```javascript
[element0, element1, ..., elementN]

new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

`elementN`: **JavaScript 배열을 초기화할 때 채워넣을 요소**. 단, 항목이 하나 뿐이며 그 항목의 자료형이 숫자일 경우 아래의 arrayLength 매개변수로 간주한다.

`arrayLength`: Array 생성자에 제공한 유일한 매개변수가 0에서 2^32-1 이하의 정수인 경우, length 속성이 해당 값인 새로운 JavaScript 배열을 생성한다.  값이 범위 밖이거나 정수가 아닌 경우 RangeError가 발생한다.

## fill()

`fill()`는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다.

```javascript
arr.fill(value[, start[, end]])
```

`value`: 배열을 채울 값.(필수)  
`start`:시작 인덱스, 기본 값은 0.  
`end`: 끝 인덱스, 기본 값은 `arr.length`  

반환 값은 **변형한 배열**이다.

```javascript
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
```

- reference: [Array() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- reference: [fill() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
