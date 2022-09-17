import solution from "./solution";

/*
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 * divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 * 
 * 조건
 * arr은 자연수를 담은 배열입니다.
 * 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
 * divisor는 자연수입니다.
 * array는 길이 1 이상인 배열입니다.
 */
const title = "나누어 떨어지는 숫자 배열";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - arr: [5, 9, 7, 10]	, divisor: 5`, () => {
  expect(solution([5, 9, 7, 10], 5)).toStrictEqual([5, 10]);
});

test(`${testCase}2 - arr: [2, 36, 1, 3]		, divisor: 1`, () => {
  expect(solution([2, 36, 1, 3], 1)).toStrictEqual([1, 2, 3, 36]);
});

test(`${testCase}3 - arr: [3,2,6]	, divisor: 10`, () => {
  expect(solution([3, 2, 6], 10)).toStrictEqual([-1]);
});
