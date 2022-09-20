function solution(sizes) {
  /** let smallArr = [];
  let bigArr = [];
  // sizes 배열을 정렬
  for (const element of sizes) {
    // 사이즈 안의 배열을 비교
    element.sort((a, b) => {
      // 배열에서 작은 수는 smallArr 넣고
      // 배열에서 큰 수는 bigArr 넣고
      if (a > b) {
        smallArr.push(parseInt(b));
        bigArr.push(parseInt(a));
      } else {
        smallArr.push(parseInt(a));
        bigArr.push(parseInt(b));
      }
    });
  }
  // smallArr 와 bigArr에서 제일 큰 수만 골라서 곱한 값을 반환
  return Math.max(...smallArr) * Math.max(...bigArr);
  */

  const sortArr = sizes.map(([w, h]) => w < h ? [w, h] : [h, w]);
  console.log(sortArr);

  let maxSize = [0, 0];
  sortArr.forEach(([w, h]) => {
    if (w > maxSize[0]) { maxSize[0] = w; }
    if (h > maxSize[1]) { maxSize[1] = h; }
  });
  return maxSize[0] * maxSize[1];
}

export default solution;