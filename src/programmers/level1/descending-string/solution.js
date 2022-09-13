function solution(s) {
  // 문자열 s를 나눈다
  // const arr = s.split("");
  // console.log(arr);
  // // // 배열을 정렬한다.
  // const sortArr = arr.sort();
  // console.log(sortArr);
  // // // 역순으로 정렬한다.
  // const reverseArr = sortArr.reverse();
  // console.log(reverseArr);
  // // // 하나의 문자열로 반환
  // const arrangedStr = reverseArr.join("");
  // console.log(arrangedStr);

  return s.split("").sort().reverse().join("");
}

export default solution;