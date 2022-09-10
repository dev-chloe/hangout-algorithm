import solution from "./solution";

/*
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 * 
 * 조건
 * num은 int 범위의 정수입니다.
 * 0은 짝수입니다.
 */

test("짝수와 홀수 > 입출력 예제 1 - num: 3", () => {
  expect(solution(3)).toBe("Odd");
});

test("짝수와 홀수 > 입출력 예제 2 - num: 4", () => {
  expect(solution(4)).toBe("Even");
});
