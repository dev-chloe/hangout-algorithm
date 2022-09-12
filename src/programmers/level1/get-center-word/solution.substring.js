function solution(s) {
  const half = Math.floor(s.length / 2);
  const isOdd = s.length % 2;
  return isOdd ? s.substring(half, half + 1) : s.substring(half - 1, half + 1);
}

export default solution;