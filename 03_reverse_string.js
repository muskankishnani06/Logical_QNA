// method-1

const str = "Muskan";

// const reverseString = (str) => {
//   const arr = str.split("");

//   console.log("String arr", arr);

//   const reverseArray = arr.reverse();

//   console.log("reverse arr", reverseArray);

//   const reverseString = reverseArray.join("");

//   console.log("reverseString", reverseString);
// };

// reverseString(str);

// method-2

// const reverseStr = (str) => {
//   console.log("reverse string", str.split("").reverse().join(""));
// };

// reverseStr(str);

// method-3

const reverseStringMethod = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log("reversed", reversed);
};

reverseStringMethod(str);

// method-4

const reverseString = (str) => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  console.log("reverse", reversed);
};

reverseString(str);
