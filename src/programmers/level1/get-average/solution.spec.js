import solution from "./solution";

/*
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * 
 * 조건
 * arr은 길이 1 이상, 100 이하인 배열입니다.
 * arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
 */

test("평균 구하기 > 입출력 예 1 - arr: [1,2,3,4]", () => {
  expect(solution([1, 2, 3, 4])).toBe(2.5);
});

test("평균 구하기 > 입출력 예 2 - arr: [5,5]", () => {
  expect(solution([5, 5])).toBe(5);
});