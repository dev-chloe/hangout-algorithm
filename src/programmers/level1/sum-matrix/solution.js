function solution(arr1, arr2) {
  /** const sumArr = [[]];
  // arr1이 가진 배열을 확인
  arr1.forEach((element, index) => {
    sumArr[index] = [];
    // arr1이 가진 배열의 요소를 확인
    element.forEach((e, idx) => {
      // 배열의 요소들과 arr2 배열의 요소를 합하여 반환
      sumArr[index].push(e + arr2[index][idx]);
    });
  }); **/

  const sumArr = arr1.map((o, index) => o.map((ele, idx) => ele + arr2[index][idx]));
  return sumArr;
}

export default solution;