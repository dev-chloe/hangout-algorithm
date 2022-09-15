function solution(n) {
  // let answer = 0;
  // // 정수 n 문자열로 변환
  // const stringN = n.toString();
  // // 문자열 n 자르기
  // const splitN = stringN.split("");
  // // 자른 문자열 n 내림차순 정렬
  // const order = splitN.sort().reverse();
  // // 내림차순 정렬된 문자 숫자로 바꿔 하나의 숫자로 합
  // answer = parseInt(order.join(""));
  // return answer;
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

export default solution;