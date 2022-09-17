function solution(left, right) {
  /** let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    count % 2 ? answer += i : answer -= i;
  }
  console.log(answer);
  return answer; **/
  let answer = 0;
  // left부터 right 사이의 숫자 반복
  for (let num = left; num <= right; num++) {
    // 제곱인 수는 약수가 홀수이고 제곱이 아닌 수는 약수가 짝수이다.
    // 따라서 기존 값에 루트를 씌어서 정수이면 약수가 홀수이니 빼주고 나머지는 짝수이니 더해준다.
    answer = Number.isInteger(Math.sqrt(num)) ? answer - num : answer + num;
  }
  return answer;
}

export default solution;