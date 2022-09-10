import solution from "./solution";

/*
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 * 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 * 
 * 조건
 * N의 범위 : 100,000,000 이하의 자연수
 */

test("자릿수 더하기 > 입출력 예 1 - n: 123", () => {
  expect(solution(123)).toBe(6);
});

test("자릿수 더하기 > 입출력 예 2 - n: 987", () => {
  expect(solution(987)).toBe(24);
});

test("자릿수 더하기 > 입출력 예 3 - n: 6543", () => {
  expect(solution(6543)).toBe(18);
});