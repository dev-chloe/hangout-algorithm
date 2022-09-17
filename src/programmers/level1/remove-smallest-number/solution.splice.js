function solution(arr) {
  // 배열의 요소가 1개라면 [-1]을 반환한다.
  if (arr.length === 1) { return [-1]; }
  const sortArr = arr.slice();
  // 배열의 요소가 1개 이상이라면 요소들을 비교한다.
  sortArr.sort((a, b) => a - b);
  // 가장 작은 숫자를 찾는다.
  const small = sortArr[0];
  // 가장 작은 숫자는 제거하고 반환한다.
  arr.splice(arr.indexOf(small), 1);
  return arr;
}

export default solution;