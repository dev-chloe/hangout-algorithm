function solution(arr) {
  // 숫자가 검색된 횟수를 기록하는 배열
  const answer = [];

  // 들어온 배열을 탐색할 때, 이전 값을 저장해 두었다가 현재 값과 비교해서
  let previous = arr[0];
  for (const num of arr) {
    // console.log(`num: ${num}, previous: ${previous}`);

    // 같으면 다음 값을 탐색하도록 반복을 넘기고
    if (num === previous) {
      continue;
    }
    // 다르면 이전 값을 기록용 배열에 넣고 현재 값을 이전 값 자리에 저장하고 다음 반복으로 넘긴다
    answer.push(previous);
    // console.log(answer);
    previous = num;
  }
  answer.push(previous);
  // console.log(answer);

  // 기록용 배열을 반환한다.
  return answer;
}

export default solution;