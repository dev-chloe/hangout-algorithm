function solution(x, n) {
  const answer = [];
  // n번 반복한다
  for (let i = 1; i <= n; i++) {
    // n번 만큼 x에 i를 곱하여 배열에 넣어준다.
    answer.push(x * i);
  }
  console.log(answer);
  return answer;
}

export default solution;