function solution(s) {
  // 문자열 s의 길이가 4 또는 6인지 확인
  // if (s.length === 4 || s.length === 6) {
  //   // 또한 숫자로만 구성이 되어 있는지 확인
  //   if (/^[0-9]+$/.test(s)) {
  //     // 숫자만 있다면 true, 문자도 포함되어 있다면 false를 반환
  //     return true;
  //   }
  // }
  // return false;

  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s) ? true : false;
}

export default solution;