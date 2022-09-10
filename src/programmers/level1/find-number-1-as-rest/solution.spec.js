import solution from "./solution";

/*
 * 자연수 n이 매개변수로 주어집니다.
 * n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
 * 답이 항상 존재함은 증명될 수 있습니다.
 * 
 * 3 ≤ n ≤ 1,000,000
 */
test("나머지가 1이 되는 수 찾기 > 입출력 예제 1 - n: 10", () => {
  // 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
  expect(solution(10)).toBe(3);
});

test("나머지가 1이 되는 수 찾기 > 입출력 예제 2 - n: 12", () => {
  // 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.
  expect(solution(12)).toBe(11);
});

test("나머지가 1이 되는 수 찾기 > 입출력 예제 3 - n: 28", () => {
  expect(solution(28)).toBe(3);
});
