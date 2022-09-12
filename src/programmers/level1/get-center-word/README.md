# 메모 - [가운데 글자 가져오기](https://school.programmers.co.kr/learn/courses/30/lessons/12903)

> [대상 소스 코드](./solution.concat.js)

## concat()

`concat()` 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 새로운 `Array`객체를 반환한다.

```javascript
array.concat([value1[, value2[, ...[, valueN]]]])
```

```javascript
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];

alpha.concat(numeric);
// 결과: ['a', 'b', 'c', 1, 2, 3]
```

> [대상 소스 코드](./solution.substring.js#L2)

## substr() - Deprecated

`substr()`는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환한다.

```javascript
str.substr(start[, length])
```

`start`: 추출하고자 하는 문자들의 시작위치다. 만약 음수가 주어진다면, 문자열총길이 + start의 값으로 취급한다. 예를 들면, start에 -3을 설정하면, 자동적으로 문자열총길이 - 3으로 설정하게 된다.

`length`: 옵션값. 추출할 문자들의 총 숫자.

## substring() - Deprecated

`substring()`는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환한다.

```javascript
str.substring(indexStart[, indexEnd])
```

`indexStart`: 반환문자열의 시작 인덱스

`indexEnd`: 옵션. 반환문자열의 마지막 인덱스 (포함하지 않음.)

- reference: [concat() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- reference: [substr() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- reference: [substring() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
