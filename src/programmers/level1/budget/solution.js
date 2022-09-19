function solution(d, budget) {
  let answer = 0;
  // d 배열 정렬
  const sortD = d.sort((a, b) => a - b);
  // 정렬한 d 배열을 반복
  for (const element of sortD) {
    // 예산보다 element가 크면 멈춘다
    if (budget < element) { break; }
    // 반복할 때마다 answer에 1을 더해준다
    answer += 1;
    // 예산에서 금액을 뺀다
    budget -= element;
  }
  // 반복한 횟수가 부서의 개수이므로 반환한다.
  return answer;
}

export default solution;