function solution(n) {
  let answer = 0;
  // 정수 n을 나누어 떨어지는 약수들을 구한다.
  for (let i = 1; i <= n; i++) {
    // 구한 약수들을 더한다.
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

export default solution;