# 메모 - [숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301)

> [대상 소스 코드](./solution.map.js#L14-L15)

## Object.entries()

`Object.entries()` 메서드는 for...in`와 같은 순서로 주어진 객체 자체의 enumerable 속성 **[key, value] 쌍의 배열을 반환**한다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점이다).  

`Object.entries()` 에 의해 반환된 배열(array)의 순서는 객체가 정의된 방법과 관련이 없다. 배열 순서가 쓸 곳이 있다면, 정렬을 먼저 하시는 것이 좋다.

```javascript
// 배열 순수 정렬 부터 하고 entries 적용
Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
```

```javascript
Object.entries(obj)
```

`obj`: 객체 자체의 열거 가능한 문자열 키를 가진 속성 [key, value] 쌍이 반환되는 객체다.  

반환값은 지정된 객체 ㅏ체의 열거 가능한 문자속성 [key, value] 쌍의 배열이다.

## RegExp()

`RegExp` 생성자는 패턴을 사용해 텍스트를 판별할 때 사용한다.

`RegExp` 객체는 리터럴 표기법과 생성자로써 생성할 수 있다.

- 리터럴 표기법의 매개변수는 두 빗금으로 감싸야 하며 따옴표를 사용하지 않는다.
- 생성자 함수의 매개변수는 빗금으로 감싸지 않으나 따옴표를 사용한다.

### 리터럴 표기법과 생성자

```javascript
/ab+c/i
new RegExp(/ab+c/, 'i') // 리터럴
new RegExp('ab+c', 'i') // 생성자
```

리터럴 표기법은 표현식을 평가할 때 정규 표현식을 컴파일한다. 정규 표현식이 변하지 않으면 리터럴 표기법을 사용한다. 예를 들어, 반복문 안에서 사용할 정규 표현식을 리터럴 표기법으로 생성하면 정규 표현식을 매번 다시 컴파일하지 않는다.

정규 표현식 객체의 생성자(new RegExp('ab+c'))를 사용하면 정규 표현식이 런타임에 컴파일된다. 패턴이 변할 가능성이 있거나, 사용자 입력과 같이 알 수 없는 외부 소스에서 가져오는 정규 표현식의 경우 생성자 함수를 사용한다.

### 생성자의 플래그

ECMAScript 6부터는 `new RegExp(/ab+c/, 'i')`처럼, 첫 매개변수가 `RegExp`이면서 `flags`를 지정해도 TypeError ("can't supply flags when constructing one RegExp from another")가 발생하지 않고, 매개변수로부터 새로운 정규 표현식을 생성한다.

생성자 함수를 사용할 경우 보통의 문자열 이스케이프 규칙(특수 문자를 문자열에 사용할 때 앞에 역빗금("\\")을 붙이는 것)을 준수해야 합니다.

```javascript
let re = /\w+/
let re = new RegExp('\\w+')
```

- reference: [Object.entries() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- reference: [RegExp() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
