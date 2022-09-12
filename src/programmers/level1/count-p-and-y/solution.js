function solution(s) {
  // 문자를 모두 대문자(또는 소문자)로 변환
  // 문자를 자른다.
  const stringArray = s.toUpperCase().split("");
  console.log(stringArray);

  // 문자열 내에서 p개수 체크
  // 문자열 내에서 y개수 체크
  // 문자열 내에서 p와 y가 없는 경우 항상 true
  if (!stringArray.includes("P") && !stringArray.includes("Y")) {
    return true;
  }
  let counterP = 0;
  let counterY = 0;
  for (const element of stringArray) {
    if (element === "P") {
      counterP++;
    } else if (element === "Y") {
      counterY++;
    }
  }
  // p와 y의 갯수를 비교해 같으면 true
  // 다르면 false
  return counterP === counterY;
}

export default solution;