# 메모 - [핸드폰 번호 가리기](https://school.programmers.co.kr/learn/courses/30/lessons/12948)

> [대상 소스 코드](./solution.replace.js#L2)

## replace()

`replace()`는 **어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환**한다. 그 패턴은 **문자열이나 정규식(RegExp)** 이 될 수 있으며, **교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수**일 수 있다.

pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않는다.

```javascript
var newStr = str.replace(regexp|substr, newSubstr|function)
```

`regexp` (pattern): **정규식(RegExp) 객체 또는 리터럴**. 일치하는 항목은 **`newSubStr` 또는 지정된 함수(function)** 가 반환 한 값으로 대체된다.  
`substr` (pattern): **`newSubStr`로 대체 될 String.** 정규식이 아닌 글자 그대로의 문자열로 처리된다. 오직 첫 번째 일치되는 문자열만이 교체된다.  
`newSubStr` (replacement): **첫번째 파라미터를 대신할 문자열(String)**. 여러가지 대체 패턴들이 지원된다.  
`function` (replacement): 주어진 regexp 또는 substr에 **일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수**.

반환 값은 어떤 패턴에 일치하는 일부 또는 모든 부분이 **교체된 새로운 문자열**이다.

```javascript
phone_number.replace(/\d(?=\d{4})/g, "*")
// /
// \d 숫자. 0-9까지 숫자를 일치한다
// (?= 결과에 포함하지 않고 기본 표현식 뒤의 그룹을 찾는다.
//    \d 숫자. 0-9까지 숫자를 일치한다.
//       {4} 수량자. 이전 토큰의 4개를 찾는다.
// )
// /g 플래그. 모든 문자와 여러줄 일치 (global) < 모든 문자를 검색하겠다.
```

- reference: [replace() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
