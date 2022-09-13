# 메모 - [같은 숫자는 싫어](https://school.programmers.co.kr/learn/courses/30/lessons/12906)

> [대상 소스 코드](./solution.filter-api.js#L5)

## filter()

`filter()` 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

`callback`: 각 요소를 시험할 함수. `true`를 반환하면 요소를 유지하고, `false`를 반환하면 버린다.  
`element`: 처리할 현재 요소  
`index`: 처리할 현재 요소의 인덱스  
`array`: `filter`를 호출한 배열
`thisArg`: `callback`을 실행할 때 `this`로 사용하는 값

반환값으로 테스트를 **통과한 요소로 이루어진 새로운 배열**이며, 어떤 요소 **테스트를 통과하지 못하면 빈 배열을 반환**한다.

## for continue

`continue` 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행한다.

```javascript
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"
```

- reference: [filter() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- reference: [continue - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/continue)
