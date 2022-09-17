function solution(arr) {
  // let answer = 0;
  // // arr 안에 모든 숫자가 있는지 확인
  // for (let i = 0; i <= 9; i++) {
  //   if (!arr.includes(i)) { answer += i; }
  // }
  // // 없는 숫자를 더해준다.
  // return answer;
  return 45 - arr.reduce((acc, cur) => acc + cur, 0);
}

export default solution;