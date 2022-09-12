# 메모 - [서울에서 김서방 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/12919)

> [대상 소스 코드](./solution.js#L3)

`indexOf()`는 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.

```javascript
arr.indexOf(searchElement[, fromIndex])
```

`searchElement`: 배열에서 찾을 요소(필수)
`fromIndex`: 검색을 시작할 색인이다. 인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않고, 제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용된다.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.indexOf(3, -7) // 2
// [3, 4, 5, 6, 7, 8, 9] 제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용한 것
arr.indexOf(3, -6) // -1
// [4, 5, 6, 7, 8, 9] 제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용한 것 
// 3은 포함 되어 있지 않아서 찾을 수 없으므로 -1
```

- reference: [ndexOf() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
