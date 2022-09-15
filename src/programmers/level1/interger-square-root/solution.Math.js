function solution(n) {
  let answer = 0;
  // 정수 n의 제곱근을 구한다.
  let squrt = Math.sqrt(n);
  if (squrt % 1 === 0) {
    // 제곱근일 경우 제곱근에 +1한 제곱을 출력한다.
    answer = Math.pow(squrt + 1, 2);
  } else {
    // 제곱근이 아닌 경우 -1을 출력한다.
    answer = -1;
  }
  return answer;
}

export default solution;