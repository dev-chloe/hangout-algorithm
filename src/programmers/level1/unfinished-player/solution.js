function solution(participant, completion) {
  // 참가자와 완주자를 정렬한다.
  const part = participant.sort();
  const comp = completion.sort();
  console.log(`part > ${part}`);
  console.log(`comp > ${comp}`);
  // 정렬한 참가자 리스트와 완주자 리스트를 비교
  for (let i in part) {
    if (part[i] !== comp[i]) {
      // 참가자 리스트에서 완주자 리스트와 일치하지 않으면 반환
      console.log(part[i]);
      return part[i];
    }
  }
}

export default solution;