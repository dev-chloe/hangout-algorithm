function solution(a, b) {
  // 두 정수 두 정수 사이의 합을 구한다.
  // const sum = a + b;
  // a, b를 뺀 값에 1을 더한 값을 구한다.
  // const minus = Math.abs(a - b) + 1;
  // 두 정수 사이의 합과 a, b를 뺀 값에 1을 더한 값을 곱한다.
  // const multiply = sum * minus;
  // 그 값을 2로 나눈다.
  // console.log(multiply / 2);
  // return multiply / 2;
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

export default solution;