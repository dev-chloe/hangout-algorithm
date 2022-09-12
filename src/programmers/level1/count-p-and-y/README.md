# 메모 - [문자열 내 p와 y의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/12916)

> [대상 소스 코드](./solution.js)

## 문자열 변환

  ---
  `toUpperCase()`는 문자열을 대문자로 변환한 값을 반환한다.
  `toLowerCase()`는 문자열을 소문자로 변환해 반환한다.
  `toLocaleUpperCase()`는 로케일별 대소문자 매핑에 따라 문자열을 대문자로 변환한 값을 반환한다.
  `toLocaleLowerCase()`는 로케일별 대소문자 매핑에 따라 문자열을 소문자로 변환해 반환한다.

  > 로케일(Locale)이란 사용자 인터페이스에서 사용되는 언어, 지역 설정, 출력 형식 등을 정의하는 문자열이다.  
  > ex) ko_KR.UTF-8, en_US.UTF-8

## 배열에서 특정 요소 포함 판별

  ---
  `includes()`는 배열이 특정 요소를 포함하고 있는지 판별한다.

  ```javascript
  arr.includes(valueToFind[, fromIndex])
  ```

  `valueToFind`: **탐색할 요소**를 말한다. 문자나 문자열을 비교할 때, includes()는 **대소문자를 구분**한다.(필수)
  `fromIndex`: 이 배열에서 searchElement **검색을 시작할 위치**다. 음의 값은 array.length + fromIndex의 인덱스를 asc로 검색한다. 기본값은 0이다.

## for..of

`for..of`는 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.

```javascript
for (variable of iterable) {
  statement
}
```

`variable`: 각 **반복에 서로 다른 속성값이 variable에 할당**된다.
`iterable`: **반복되는 열거가능(enumerable)한 속성이 있는 객체**이다.

```javascript
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

- reference: [toUpperCase() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- reference: [toLowerCase() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- reference: [toLocaleUpperCase() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)
- reference: [toLocaleLowerCase() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)
- reference: [includes() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- reference: [for..of - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
