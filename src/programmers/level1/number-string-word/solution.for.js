function solution(s) {
  // 숫자 문자열 배열을 만듦
  const stringNum = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"
  ];
  // 숫자문자열을 반복하면서 s와 맞는 글이 있는 부분을 자르고 그 숫자로 대체해준다
  for (let i = 0; i < stringNum.length; i++) {
    s = s.split(stringNum[i]).join(i);
  }
  // 숫자로 변환
  return parseInt(s);
}

export default solution;