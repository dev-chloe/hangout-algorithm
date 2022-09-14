function solution(strings, n) {
  // 문자를 정렬
  // return strings.sort((str1, str2) => {
  //   // n번째 문자 비교
  //   return str1[n] === str2[n] ? str1.localeCompare(str2) : str1[n].localeCompare(str2[n]);
  // });

  return strings.sort((str1, str2) => str1[n] === str2[n] ? str1.localeCompare(str2) : str1[n].localeCompare(str2[n]));
}

export default solution;