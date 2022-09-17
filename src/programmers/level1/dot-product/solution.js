function solution(a, b) {
  // for 이용
  // const arr = [];
  // // a의 요소와 b의 요소를 매치하여 곱한다.
  // for (let i = 0; i < a.length; i++) {
  //   arr.push(a[i] * b[i]);
  // }
  // // 곱한 값들을 더한다.
  // console.log(arr.reduce((acc, cur) => acc + cur));
  // return arr.reduce((acc, cur) => acc + cur);

  // map 이용
  // const arr = a.map((num, idx) => num * b[idx]);
  // return arr.reduce((acc, cur) => acc + cur);

  // reduce만 이용
  return a.reduce((acc, cur, idx) => acc += cur * b[idx], 0);
}

export default solution;

