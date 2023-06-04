// LVIII
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
    const currChar = s.charAt(sIter);

    if (subtractions.indexOf(currChar) !== -1) {
      if (sIter + 1 < s.length) {
        const nextChar = s.charAt(sIter + 1);
        if (romanIntegerDict[currChar].indexOf(nextChar) !== -1) {
          num += romanIntegerDict[nextChar][0] - romanIntegerDict[currChar][0];
          if (subtractions.indexOf(nextChar) === -1) {
            sIter += 2;
          } else {
            sIter += 1;
          }
        }
      }
    }

    if (sIter - currIter !== 2) {
      num = num + romanIntegerDict[currChar][0];
      sIter += 1;
    }
  }
  return num;
}

// After Iter 0
//num = 50;
// chars processed = [L];

// After Iter 1
//num = 55;
// chars processed = [L,V];

// After Iter 2
//num = 56;
// chars processed = [L,V, I];

// After Iter 3
//num = 57;
// chars processed = [L,V, I, I];

// After Iter 4
//num = 58;
// chars processed = [L,V, I,I, I];
