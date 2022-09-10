function solution(arr) {
  // 배열 요소를 합함
  // const sum = arr.reduce((acc, cur) => acc + cur);
  // console.log("sum", sum);

  // // 배열의 길이를 구함
  // const arrLength = arr.length;
  // console.log("arrLength", arrLength);
  // // 모든 배열의 요소를 더한 값에 길이를 나눔
  // console.log("average", sum / arrLength);
  // return sum / arrLength;

  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

export default solution;