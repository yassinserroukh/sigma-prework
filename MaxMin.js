const highLow = (arr) => {
  let highest = arr[0];
  let lowest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    } else if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return {
    lowest,
    highest,
  };
};

console.log(highLow([102, 24, 5, 48, 10, 75, 64]));
