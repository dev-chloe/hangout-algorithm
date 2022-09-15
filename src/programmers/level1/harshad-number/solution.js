function solution(x) {
  /** 
  // 정수 n을 나눈다.
  const splitN = (n + "").split("");
  // 나눈 n을 숫자로 변환한다.
  const numList = splitN.map(i => parseInt(i));
  // 숫자들을 더한 값으로 정수 n을 나누어 떨어지면 true
  const sum = numList.reduce((a, b) => a + b);
  console.log(sum);
  if (n % sum === 0) {
    return true;
  } else {
    // 떨어지지 않으면 false;
    return false;
  } **/
  const numList = (x + "").split("").map(i => parseInt(i));
  const sum = numList.reduce((a, b) => a + b);
  return x % sum ? false : true;
}

export default solution;