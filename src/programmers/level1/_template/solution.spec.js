import solution from "./solution";

/*
 * 문제 내용
 * 
 * 조건
 * 
 */
const title = "문제";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - num: 1`, () => {
  expect(solution(1)).toBe(1);
});
