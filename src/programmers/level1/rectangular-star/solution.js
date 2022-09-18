function solution(a, b) {
  /** const answer = [];
  // b가 몇개인지 확인
  for (let j = 0; j < b; j++) {
    let star = "";
    // a가 몇개인지 확인
    for (let i = 0; i < a; i++) {
      star += "*";
    }
    answer[j] = star;
  }
  // 배열에 담아 반환
  return answer; **/
  const answer = [];
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    answer.push(row);
  }
  return answer;
}

export default solution;