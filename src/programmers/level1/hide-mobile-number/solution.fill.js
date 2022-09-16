function solution(phone_number) {
  /** // phone_number의 길이를 확인
  const stringLength = phone_number.length;
  // phone_number문자열을 배열로 전환
  const numArray = phone_number.split("");
  // 배열의 첫번째부터 마지막 4번째 앞까지 * 전환
  const change = numArray.fill("*", 0, stringLength - 4);
  // 전환된 배열을 문자로 변환
  return change.join(""); **/
  const strLength = phone_number.length;
  return phone_number.split("").fill("*", 0, strLength - 4).join("");
}

export default solution;