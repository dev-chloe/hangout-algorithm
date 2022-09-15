function solution(n) {
  let answer = 0;
  // 정수 n이 정수 x의 제곱인지 확인한다.
  for (let x = 1; x < n; x++) {
    if (x * x === n) {
      // n이 x의 제곱이라면 x+1의 제곱을 출력한다.
      answer = (x + 1) * (x + 1);
      break;
    }
    // 아니라면 -1을 출력한다.
    answer = -1;
  }
  return answer;
}

export default solution;