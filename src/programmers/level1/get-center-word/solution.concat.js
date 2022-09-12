function solution(s) {
  // 빈 문자열을 만듦
  let result = "";
  if (s.length % 2 === 0) {
    // 문자의 길이를 2로 나누어 떨어지면 가운데 2글자를 반환
    result = result.concat(s[s.length / 2 - 1]);
    result = result.concat(s[s.length / 2]);
  } else {
    // 문자 길이를 2로 나누어 떨어지지 않으면 가운데 1 글자만 반환
    result = result.concat(s[Math.floor(s.length / 2)]);
  }

  console.log(result);
  return result;
}

export default solution;