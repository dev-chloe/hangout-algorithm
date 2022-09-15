# 메모 - [완주하지 못한 선수](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

> [대상 소스 코드](./solution.js#L8)

## for...in

`for...in` 문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복한다.

```javascript
for (const variable in object) {
  statement
}
```

`variable`: 매번마다 다른 속성이름이 변수(variable)로 지정된다.  
`object`: 반복작업을 수행할 객체로 열거형 속성을 가지고 있는 객체  

`for...in`은 객체의 반복을 위해서 만들어졌지만 배열의 반복을 위해서는 추천되지 않는다.  
객체의 속성을 쉽게 확인 할 수 있으므로 실질적으로 디버깅을 위해 사용될 수 있다.  
배열이 데이터의 저장에서는 더 실용적이지만, `키-값` 쌍이 선호되는 데이터의 경우 **특정 값을 가진 키가 있는지 확인하는 경우에 사용할 수 있다.**

```javascript
const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

- reference: [for...in - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in)
