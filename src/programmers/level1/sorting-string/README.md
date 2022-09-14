# 메모 - [문자열 내 마음대로 정렬하기](https://school.programmers.co.kr/learn/courses/30/lessons/12915)

> [대상 소스 코드](./solution.js#L8)

## localeCompare()

`localeCompare()`는 참조 문자열이 정렬 순서에서 지정된 문자열의 앞이나 뒤에 오는지 또는 지정된 문자열과 같은지 여부를 나타내는 숫자를 반환한다.

```javascript
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

`compareString`: 비교할 대상 문자열  
`locales`, `options`: 함수의 동작을 사용자 정의하고 응용 프로그램에서 형식 규칙을 사용할 언어를 지정할 수 있도록 한다. `local`과 `options` 인수를 무시하는 구현에서 사용되는 로케일과 반환되는 문자열의 형식은 구현에 전적으로 의존한다.

인수로 지정된 문자열이 정렬상 string 객체의 **문자열 뒤에 있으면 음수**, 그 **반대의 경우는 양수**, **동등한 경우에는 0**을 반환한다.

```javascript
'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'b'.localeCompare('b'); // 0
```

- reference: [localeCompare() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
