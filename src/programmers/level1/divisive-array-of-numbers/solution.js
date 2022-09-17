function solution(arr, divisor) {
  /** // 빈 배열을 만든다.
  const result = [];
  // arr의 모든 요소를 divisor로 나눈다.
  for (const element of arr) {
    if (element % divisor === 0) {
      // 나누어 떨어지는 요소는 빈 배열에 넣고 반환한다.
      result.push(element);
    }
  }
  // 아무것도 나누어 떨어지지 않는다면 [-1]만 반환한다.
  if (result.length == 0) {
    result.push(-1);
  }
  console.log(result.sort((a, b) => a - b));
  return result; **/

  const result = arr.filter(i => i % divisor === 0).sort((a, b) => a - b);
  return result.length > 1 ? result : [-1];
}

export default solution;