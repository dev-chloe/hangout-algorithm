# 메모 - [문자열 내림차순으로 배치하기](https://school.programmers.co.kr/learn/courses/30/lessons/12919)

> [대상 소스 코드](./solution.js#L15)

## sort()

`sort()` 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
반환 값은 정렬한 배열이며 원 배열이 정렬되는 것에 유의해야 된다.
복사본이 만들어지는 것이 아니다.

```javascript
arr.sort([compareFunction])
```

`compareFunction`: 정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다.

```javascript
function solution(s) {
  const arr = s.split("");
  return arr.sort();
}
solution("Zkeowcg")
// ['Z', 'c', 'e', 'g', 'k', 'o', 'w']
// 대문자의 유니코드가 소문자의 유니코드보다 먼저다.

function solutionNum(s) {
  return s.sort();
}
solutionNum([1, 30, 4, 21, 100000])
// [1, 100000, 21, 30, 4]
```

## reverse()

`reverse()` 메서드는 배열의 순서를 반전한다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 된다.
반환값은 순서가 반전된 배열이다.
`reverse` 메서드는 호출한 배열을 반전하고 원본 배열을 변형하며 그 참조를 반환한다.

```javascript
arr.reverse()
```

```javascript
function solution(s) {
  const arr = s.split("");
  return arr.sort().reverse();
}
solution("Zkeowcg")
// ['w', 'o', 'k', 'g', 'e', 'c', 'Z']

function solutionNum(s) {
  return s.sort().reverse();
}
solutionNum([1, 30, 4, 21, 100000])
// [4, 30, 21, 100000, 1]
```

- reference: [sort() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- reference: [영어 알파벳 유니코드](<https://unicode-table.com/kr/alphabets/english/>)
- reference: [reverse() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
