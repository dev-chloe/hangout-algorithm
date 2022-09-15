import solution from "./solution.toString";

/*
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
 * 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 * 
 * 조건
 * n은 10,000,000,000이하인 자연수입니다.
 */
const title = "자연수 뒤집어 배열로 만들기";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - num: 12345`, () => {
  expect(solution(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});
