import solution from "./solution";

/*
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 * 
 * 조건
 * n은 0 이상 3000이하인 정수입니다.
 */
const title = "약수의 합";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - num: 12`, () => {
  expect(solution(12)).toBe(28);
});

test(`${testCase}2 - num: 5`, () => {
  expect(solution(5)).toBe(6);
});
