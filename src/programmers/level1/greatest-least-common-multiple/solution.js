function solution(n, m) {
  /**
  const answer = [];
  let greatResult = 1;
  let leastResult = 1;
  // n과 m을 나누어 떨어지는 최대공약수를 구함
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      greatResult = i;
    }
  }
  answer.push(greatResult);
  // n과 m을 차례로 배수를 구하다가 최소공배수를 구한다.
  while (true) {
    if ((leastResult % n === 0) && (leastResult % m === 0)) {
      break;
    }
    leastResult++;
  }
  answer.push(leastResult);
  // 구한 최대공약수를 최소공배수를 반환한다.
  console.log(answer);
  return answer; **/
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

export default solution;