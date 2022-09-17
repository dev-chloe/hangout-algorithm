function solution(absolutes, signs) {
  /** const arr = [];
  // absolutes와 signs를 비교하여
  for (let i = 0; i < absolutes.length; i++) {
    // true 이면 양수
    // false 이면 음수로 변환
    signs[i] === true ? arr.push(absolutes[i]) : arr.push(-absolutes[i]);
  }
  // 모든 수를 합한다.
  return arr.reduce((a, b) => a + b); **/
  const arr = [];
  absolutes.map((item, index) => {
    arr.push(signs[index] ? item : -item);
  });
  return arr.reduce((a, b) => a + b);
}

export default solution;