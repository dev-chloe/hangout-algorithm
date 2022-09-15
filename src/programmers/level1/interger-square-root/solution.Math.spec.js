import solution from "./solution.Math";

/*
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 * 
 * 조건
 * n은 1이상, 50000000000000 이하인 양의 정수입니다.
 */
const title = "정수 제곱근 판별";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - num: 121`, () => {
  expect(solution(121)).toBe(144);
});

test(`${testCase}2 - num: 3`, () => {
  expect(solution(3)).toBe(-1);
});
