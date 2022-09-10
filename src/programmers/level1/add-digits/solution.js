function solution(n) {
  // 자연수 N을 문자로 변환
  // const stringN = n.toString();

  // // 변환한 문자를 자름
  // const stringArry = stringN.split("");
  // console.log(stringArry);

  // // 자른 문자들을 숫자로 변환해 더함
  // return stringArry.reduce((a, b) => a + Number(b), 0);

  return n.toString().split("").reduce((acc, cur) => acc + Number(cur), 0);
}

export default solution;