function solution(price, money, count) {
  /** let needMoney = 0;
  // price는 횟수를 지나면 배수가 된다.
  for (let i = 1; i <= count; i++) {
    // 배수들을 더하면 총 필요한 금액
    needMoney += price * i;
  }
  // 필요한 금액에서 가지고 있는 수를 뺀다.
  // 필요한 금액이 가지고 있는돈 보다 많으면 부족한 금액 반환
  // 부족하지 않으면 0을 반환
  return needMoney <= money ? 0 : needMoney - money; **/

  const needMoney = price * count * (count + 1) / 2 - money;
  return needMoney > 0 ? needMoney : 0;
}

export default solution;