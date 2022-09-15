# 메모 - [수박수박수박수박수박수?](https://school.programmers.co.kr/learn/courses/30/lessons/12922)

> [대상 소스 코드](./solution.array.js#L13)

## join()

`join()`는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
`arr.length`가 0이라면, 빈 문자열을 반환한다.

```javascript
arr.join([separator])
```

`separator`: 배열의 각 요소를 구분할 문자열을 지정한다. 이 구분자는 필요한 경우 문자열로 변환된다. 생략하면 배열의 요소들이 쉼표로 구분된다. separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결된다.

```javascript
function solution(n) {
  let watermelon = [];
  for (let i = 0; i < n; i++) {
    watermelon.push(i % 2 ? "박" : "수");
  }
  return watermelon.join();
}
solution(3) 
// "수, 박, 수"

function solution(n) {
  let watermelon = [];
  for (let i = 0; i < n; i++) {
    watermelon.push(i % 2 ? "박" : "수");
  }
  return watermelon.join("");
}
solution(3) 
// "수박수"
```

> [대상 소스 코드](./solution.string.js#L8)

## 더하기 할당(+=)

`더하기 할당 연산자(+=)`는 오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당한다. 두 피연산자의 타입이 더하기 할당 연산자의 동작을 결정하며, 덧셈 또는 문자열 연결이 가능하다.

```javascript
x += y
```

```javascript
foo = "foo"
foo += "bar" // foobar
```

- reference: [join() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- reference: [더하기 할당 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
