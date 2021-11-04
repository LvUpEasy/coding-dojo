const rank = (x) => Math.min(6, 7 - x);

function solution(lottos, winNumber) {
  const minWinning = lottos.filter((number) => winNumber.includes(number)).length;
  const minRank = rank(minWinning);

  const zeroCount = lottos.filter((number) => number === 0).length;
  const maxWining = minWinning + zeroCount;
  const maxRank = rank(maxWining);

  return [maxRank, minRank];
}

test('solution', () => {
    expect(solution(
      [44, 1, 0, 0, 31, 25],
      [31, 10, 45, 1, 6, 19],
    )).toEqual([3, 5]);

    expect(solution(
      [0, 0, 0, 0, 0, 0],
      [38, 19, 20, 40, 15, 25],
    )).toEqual([1, 6]);

    expect(solution(
      [45, 4, 35, 20, 3, 9],
      [20, 9, 3, 45, 4, 35],
    )).toEqual([1, 1]);
});
