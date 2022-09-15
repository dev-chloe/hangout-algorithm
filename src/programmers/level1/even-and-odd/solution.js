function solution(num) {
  // 정수 num을 2로 나누어 떨어지면 "Even"을 반환
  // 정수 num을 2로 나누어 떨어지지 않으면 "Odd"를 반환
  return num % 2 ? "Odd" : "Even";

  /**  const rest = num % 2;
  const isOdd = Boolean(rest);
  console.log(`rest: ${rest} =>  isOdd: ${isOdd}`);
  return isOdd ? "Odd" : "Even";  **/
}

export default solution;