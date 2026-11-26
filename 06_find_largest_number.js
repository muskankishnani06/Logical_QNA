// method-1

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findValue = (num) => {
  const max = Math.max(...num);

  console.log("max num", max);
};

findValue(num);

// method-2

const maxValue = num.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return curr;
});

console.log("max num", maxValue);

// method-3

const findLargestNum = (num) => {
  let largest = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }

  console.log("largest", largest);
};

findLargestNum(num)