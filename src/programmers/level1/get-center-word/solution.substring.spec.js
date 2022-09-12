import solution from "./solution.substring";

/*
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
 * 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 * 
 * 조건
 * s는 길이가 1 이상, 100이하인 스트링입니다.
 */
const title = "가운데 글자 가져오기";
const testCase = `${title} > 입출력 예 No.`;

test(`${testCase}1 - string: "abcde"`, () => {
  expect(solution("abcde")).toBe("c");
});

test(`${testCase}1 - string: "qwer"`, () => {
  expect(solution("qwer")).toBe("we");
});

test(`${testCase}1 - string: "abcdefg"`, () => {
  expect(solution("abcdefg")).toBe("d");
});

test(`${testCase}1 - string: "qwerty"`, () => {
  expect(solution("qwerty")).toBe("er");
});