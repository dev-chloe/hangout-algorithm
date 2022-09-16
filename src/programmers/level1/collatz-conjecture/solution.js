function solution(num) {
  /** let answer = 0;
  // n이 1이 아닐 때
  while (num != 1) {
    // n이 나누어 떨어지면 2로 나누고
    // n이 나누어 떨어지지 않으면 3을 곱한 후 1을 더한다.
    num = num % 2 ? (num * 3) + 1 : num / 2;
    answer += 1;
  }
  // 결과가 1이 나올 때까지 반복 횟수를 반환한다.
  // 500번을 반복할 때까지 1이 되지 않으면 -1을 반환한다.
  if (answer >= 500) {
    console.log(answer);
    return -1;
  }
  console.log(answer);
  return answer; **/

  let answer = 0;
  while (num != 1 && answer != 500) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
  }
  return num == 1 ? answer : -1;
}

export default solution;