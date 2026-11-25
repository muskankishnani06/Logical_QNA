// method-1
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const findSum = (num) => {
//   let sum = num.reduce((total, current) => {
//     return total + current;
//   }, 0);

//   console.log(sum);
// };

// findSum(num);

// method-2

// const total = (num) => {
//   let sum = 0;

//   for (let i of num) {
//     sum += i;
//   }

//   console.log("total", sum);
// };

// total(num);

// method-3

// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//   sum = sum + num[i];
// }

// console.log("total", sum);

// method-4

const findSum = (num) => {
  let sum = 0;

  num.forEach((value) => {
    sum += value;
  });

  console.log(sum);
};

findSum(num);
