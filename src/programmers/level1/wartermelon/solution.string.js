function solution(n) {
  // 빈 문자열을 만든다.
  let result = "";
  // 길이 n 만큼 반복
  for (let i = 0; i < n; i++) {
    // n을 2로 나누어 떨어지지 않으면 "박"
    // n을 2로 나누어 떨어지면 "수"를 반환하여 문자열에 넣는다.
    result += i % 2 ? "박" : "수";
  }
  return result;
}

export default solution;