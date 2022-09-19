function solution(s, n) {
  // 알파벳 배열을 만든다
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (const i in s) {
    let text = s[i];
    // 공백에는 공백을 넣어준다.
    if (text === " ") {
      answer += " ";
      continue;
    }
    // 입력된 문자가 대문자인지 소문자인지 확인
    let checkText = upper.includes(text) ? upper : lower;
    // 입력된 문자의 위치에 n번째 뒤의 위치를 구함
    let index = checkText.indexOf(text) + n;
    // 입력값이 26이상일 때는  입력된 문자의 길이를 뺀 값을 적용
    if (index >= checkText.length) {
      index -= checkText.length;
    }
    answer += checkText[index];
  }

  return answer;
}

export default solution;