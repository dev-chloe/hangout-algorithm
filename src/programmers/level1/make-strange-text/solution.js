function solution(s) {
  // 문자열 자르기
  const splitS = s.split(" ");
  // 빈 배열 생성
  const answer = [];
  for (const element of splitS) {
    // 단어의 홀수 번째 글은 소문자 짝수는 대문자로 변환하여 배열에 넣는다
    answer.push(element.split("").map((item, idx) => idx % 2 ? item.toLowerCase() : item.toUpperCase()).join(""));
  }
  // 문자로 변환
  return answer.join(" ");
}

export default solution;