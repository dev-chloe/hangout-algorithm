function solution(num) {
  /** 
  // n를 3진법으로 바꾼다
  const stringN = num.toString(3);
  // 3진법으로 바꾼 수를 반전한다
  const revresN = stringN.split("").reverse().join("");
  // 반전한 수를 다시 10진법으로 바꾼다
  return parseInt(revresN, 3); */
  return parseInt([...num.toString(3)].reverse().join(""), 3);
}

export default solution;