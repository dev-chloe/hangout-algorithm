function solution(n) {
  // 빈 배열을 만든다.
  let watermelon = [];

  // 길이 n 만큼 반복
  for (let i = 0; i < n; i++) {
    // n을 2로 나누어 떨어지지 않으면 "박"
    // n을 2로 나누어 떨어지면 "수"를 반환하여 배열에 넣는다.
    watermelon.push(i % 2 ? "박" : "수");
  }
  console.log(watermelon);
  // array를 하나의 문자로 반환
  return watermelon.join("");
}

export default solution;