const getIntValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getArrWithUniqueIntValues = (min, max, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    let val = getIntValue(min, max);
    while (arr.includes(val)) {
      val = getIntValue(min, max);
    }
    arr.push(val);
  }
  return arr;
};

export const fillPuzzleWithRandomImages = (numberOfPuzzles) => {
  const startValue = 0;
  return getArrWithUniqueIntValues(startValue, numberOfPuzzles, numberOfPuzzles);
};

export const isPuzzleReady = items => items.every((element, index) => element === index);
