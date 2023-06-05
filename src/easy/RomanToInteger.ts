export function romanToInt(s: string): number {
  const subtractions = ["I", "X", "C"];

  const romanIntegerDict = {
    I: [1, "V", "X"],
    V: [5],
    X: [10, "L", "C"],
    L: [50],
    C: [100, "D", "M"],
    D: [500],
    M: [1000],
  };

  if (s.length === 1) return romanIntegerDict[s.charAt(0)][0];

  let sIter = 0;
  let num = 0;
  while (sIter < s.length) {
    const currIter = sIter;
    const currNum = num;
    const currChar = s.charAt(sIter);

    if (subtractions.indexOf(currChar) !== -1) {
      if (sIter + 1 < s.length) {
        const nextChar = s.charAt(sIter + 1);
        if (romanIntegerDict[currChar].indexOf(nextChar) !== -1) {
          num += romanIntegerDict[nextChar][0] - romanIntegerDict[currChar][0];
          sIter += 2;
        }
      }
    }

    if (sIter - currIter !== 2) {
      sIter += 1;
    }

    if (currNum === num) {
      num = num + romanIntegerDict[currChar][0];
    }
  }
  return num;
}
