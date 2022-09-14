function solution(arr, commands) {
  // 빈 배열을 만든다
  // const resultArray = [];
  // // arr를 i번째부터 j번째까지 자른다
  // for (let i = 0; i < commands.length; i++) {
  //   let list = arr.slice(commands[i][0] - 1, commands[i][1]);
  //   // console.info(list);
  //   // 자른 arr를 순서대로 정렬한다.
  //   let sortArr = list.sort((prev, cur) => prev - cur);
  //   // console.log(sortArr);
  //   // 정렬된 arr의 k번째 요소를 만들어둔 빈 배열에 넣는다.
  //   resultArray.push(sortArr[commands[i][2] - 1]);
  // }
  // console.log(resultArray);
  // return resultArray;
  const resultArray = [];

  for (let i = 0; i < commands.length; i++) {
    resultArray.push(arr.slice(commands[i][0] - 1, commands[i][1]).sort((prev, cur) => prev - cur)[commands[i][2] - 1]);
  }
  return resultArray;
}

export default solution;