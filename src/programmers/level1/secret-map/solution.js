function solution(n, arr1, arr2) {
  /** let arr1Result = [];
  let arr2Result = [];
  let sumArr = [];
  for (let i = 0; i < arr1.length; i++) {
    const binary = arr1[i].toString(2);
    arr1Result.push(binary.length != n ? "0".repeat(n - binary.length) + binary : binary);
  }
  for (let i = 0; i < arr2.length; i++) {
    const binary = arr2[i].toString(2);
    arr2Result.push(binary.length != n ? "0".repeat(n - binary.length) + binary : binary);
  }
  for (let i = 0; i < n; i++) {
    let fillText = "";
    for (let j = 0; j < n; j++) {
      if (arr1Result[i][j] | arr2Result[i][j] === "1") {
        fillText += "#";
      } else {
        fillText += " ";
      }
    }
    sumArr.push(fillText);
  }
  return sumArr; **/

  const answer = [];
  for (let i = 0; i < n; i++) {
    let row = (arr1[i] | arr2[i]).toString(2);
    row = "0".repeat(n - row.length) + row;
    row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
    answer.push(row);
  }
  console.log(answer);
  return answer;
}

export default solution;