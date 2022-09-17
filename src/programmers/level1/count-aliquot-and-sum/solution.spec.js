import solution from "./solution";

/*
 * 두 정수 left와 right가 매개변수로 주어집니다.
 * left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * 조건
 * 1 ≤ left ≤ right ≤ 1,000
 */
const title = "약수의 개수와 덧셈";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - left: 13, right:17`, () => {
  expect(solution(13, 17)).toBe(43);
});

test(`${testCase}2 - left: 24, right:27`, () => {
  expect(solution(24, 27)).toBe(52);
});
