function solution(n) {
  // const answer = [];
  // // 자연수 n을 문자열로 변환한다.
  // const stringN = n.toString();
  // // 자연수 n을 나누어준다.
  // const splitN = stringN.split("");
  // // 나눈 n을 정렬하여 뒤집어준다.
  // const reversN = splitN.reverse();
  // for (const element of reversN) {
  //   // 숫자로 변환하여 빈 배열에 넣는다.
  //   answer.push(parseInt(element));
  // }
  // return answer;
  const answer = [];
  const reversN = n.toString().split("").reverse();
  for (const element of reversN) {
    answer.push(parseInt(element));
  }
  return answer;
}

export default solution;