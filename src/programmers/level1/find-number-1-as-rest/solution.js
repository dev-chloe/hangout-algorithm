function solution(n) {
  // 가장 작은 수부터 순차적으로 탐색 할 수 있는 반복문 필요
  for (let x = 1; x < n; x++) {
    // 반복문을 통해서 n을 나누어서 1이 되는 경우를 찾아서 반환
    if (n % x === 1) {
      return x;
    }
  }
}

export default solution;