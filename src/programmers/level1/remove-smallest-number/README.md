# 메모 - [제일 작은 수 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/12935)

> [대상 소스 코드](./solution.js#L10)

## splice()

`splice()`는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

`start`: **배열의 변경을 시작할 인덱스다**. 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정된다. 음수인 경우 배열의 끝에서부터 요소를 세어나간다(원점 -1, 즉 -n이면 요소 끝의 n번째 요소를 가리키며 `array.length - n`번째 인덱스와 같음). 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정된다.  
`deleteCount`: **배열에서 제거할 요소의 수**다. deleteCount를 생략하거나 값이 `array.length - start`보다 크면 start부터의 모든 요소를 제거한다. deleteCount가 0 이하라면 어떤 요소도 제거하지 않는다. 이 때는 최소한 하나의 새로운 요소를 지정해야 한다.  
`item1, item2, <em>...</em>`: **배열에 추가할 요소**다. 아무 요소도 지정하지 않으면 splice()는 요소를 제거하기만 한다.

반환 값은 제거한 요소를 담은 배열이다. 하나의 요소만 제거한 경우 길이가 1인 배열을 반환한다. 아무 값도 제거하지 않았으면 빈 배열을 반환한다.

```javascript
// 하나도 제거하지 않고, 2번 인덱스에 "drum" 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

// 하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

// 3번 인덱스에서 한 개 요소 제거
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

// 0번 인덱스에서 두 개 요소 제거하고 "parrot", "anemone", "blue" 추가
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

// 2번 인덱스를 포함해서 이후의 모든 요소 제거
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

## Math.min()

`Math.min()` 함수는 주어진 숫자들 중 가장 작은 값을 반환한다.

```javascript
Math.min([value1[, value2[, ...]]])
```

`value1, value2, ...`: 숫자형

반환값은 주어진 숫자들 중 가장 작은 값이다. 만약 적어도 1개 이상의 인자값이 숫자형으로 변환이 불가능 한 경우 이 함수는 `NaN` 를 반환한다.

```javascript
var x = 10, y = -20;
var z = Math.min(x, y);
// z = -20
```

- reference: [splice() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- reference: [Math.min() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
