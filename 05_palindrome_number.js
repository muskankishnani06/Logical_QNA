// method-1

let word = "nayan";

// const checkPalindrome = (word) => {
//   const lowerWord = word.toLowerCase();
//   const reverseWord = lowerWord.split("").reverse().join("");

//   if (lowerWord === reverseWord) {
//     console.log("given string is palindrome", word);
//   } else {
//     console.log("given string is not palindrome");
//   }

//   console.log(reverseWord);
// };

// checkPalindrome(word);

// method-2

// const checkPalindrome = (word) => {
//   let lowerWord = word.toLowerCase();
//   let reverseWord = "";

//   for (let i = lowerWord.length - 1; i >= 0; i--) {
//     reverseWord += lowerWord[i];
//   }

//   if (lowerWord === reverseWord) {
//     console.log("given string is palindrome", word);
//   } else {
//     console.log("given string is not palindrome");
//   }

//   console.log(reverseWord);
// };

// checkPalindrome(word);

// method-3

const checkPalindrome = (str) => {
  let lowerWord = str.toLowerCase();
  let reverseWord = "";

  for (let char of lowerWord) {
    reverseWord = char + reverseWord;
  }

  if (lowerWord === reverseWord) {
    console.log("given word is palindrome", str);
  } else {
    console.log("given word is not palindrome");
  }
};

checkPalindrome(word);
