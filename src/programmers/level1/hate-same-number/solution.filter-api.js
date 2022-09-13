function solution(arr) {
  // 이전과 같은 숫자인지 체크하여 
  // 같은 숫자이면 넘어가고
  // 다른 숫자이면 반환
  return arr.filter((value, index) => value != arr[index + 1]);
}

export default solution;