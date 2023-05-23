// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.    

describe('codeMessage', () => {
    it("takes in a string and returns a string with a coded message.", () => {
      const secretCodeWord1 = "Lackadaisical";
      const secretCodeWord2 = "Gobbledygook";
      const secretCodeWord3 = "Eccentric";
      expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
      expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
      expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
    });
  });

// FAIL  ./code-challenges.test.js
//  ReferenceError: codeMessage is not defined


                            // b) Create the function that makes the test pass.

// declare variable and take in a single string as a parameter 
const codeMessage = (str) => {
    //initialize the an empty string for output later
    let codeStr = "";
    //split the string to allow for iteration 
    const strBreak = str.split("");
    // create a for loop to iterate through the ney array in ascending order
    for (let i = 0; i < str.length; i++) {
        //Logic, if specific letters lowercase or Capitalized return the coorelating number instead, else return the origional index. 
      if (strBreak[i] === "a" || strBreak[i] === "A") {
        codeStr += "4";
      } else if (strBreak[i] === "e" || strBreak[i] === "E") {
        codeStr += "3";
      } else if (strBreak[i] === "i" || strBreak[i] === "I") {
        codeStr += "1";
      } else if (strBreak[i] === "o" || strBreak[i] === "O") {
        codeStr += "0";
      } else {
        codeStr += strBreak[i];
      }
    }
    // return the initialized string with the values place there from the logic.
    return codeStr;
  };
  
  
  
 //**************************************************************************************************************************** 
  
  // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
//declare variable 
//initialaze 
//takes in an array
//itterate through each value within the array
//identify a particular letter within the values -> declare the letter as a variable
//return the identified value if it includes the specified letter



// a) Create a test with expects statement using the variable provided.

describe('filterWordsByLetter', () => {
    it('returns an array of words containing the specified letter', () => {
      const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];
      const filterLetterA = "a";
      const filterLetterE = "e";
  
      expect(filterWordsByLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"]);
      expect(filterWordsByLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    });
  });

  //  FAIL  ./code-challenges.test.js
//   ReferenceError: filterWordsByLetter is not defined

// b) Create the function that makes the test pass.

// ********************************************BELOW DID NOT WORK**********************************************************
// const filterWordsByLetter = () => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];
//     //initializing the empty array for each expect
//     const filterLetterAArray = [];
//     const filterLetterEArray = [];
//     // interating through, starting at 0 index through the length of the fruitArray variable array from Left to Right. 
//     for (let i = 0; i < fruitArray.length; i++) {
//         if (fruitArray[i].includes("a") || fruitArray[i].includes("A")) {
//           filterLetterAArray.push(fruitArray[i]);
//         } else if (fruitArray[i].includes("e") || fruitArray[i].includes("E")) {
//           filterLetterEArray.push(fruitArray[i]);
//         }
//       }
    
//       return [filterLetterAArray] &&  [filterLetterEArray];
//     }
// ********************************************ABOVE DID NOT WORK**********************************************************

const filterWordsByLetter = (fruitArray, filterLetter) => {
    //initialize an empty array to input passing values
    const filteredArray = [];
    //iterate through the elements 
    for (let i = 0; i < fruitArray.length; i++) {
        //Logic set the index to lowercase and determine if a specified letter is present at that index
      if (fruitArray[i].toLowerCase().includes(filterLetter.toLowerCase())) {
        // if true, push to the initialized array
        filteredArray.push(fruitArray[i]);
      }
    }
    return filteredArray;
}

 //**************************************************************************************************************************** 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// Declare the variable
// Initialize the variable
// Iterate through the array to read the values and compare them
// Define what a full house is inorder for us to determine if values within and array equates to that.  One threeOfAKind, and one twoOfAKind.
// sort the values so that its easier to read? 
// Return the result of the comparison as a boolean value

// a) Create a test with expect statements using the variable provided.
describe('isFullHouse', () => {
    it('determines whether the array represents a full house', () => {
      const hand1 = [5, 5, 5, 3, 3];
      const hand2 = [5, 5, 3, 3, 4];
      const hand3 = [5, 5, 5, 5, 4];
      const hand4 = [7, 2, 7, 2, 7];
      
      expect(isFullHouse(hand1)).toEqual(true);
      expect(isFullHouse(hand2)).toEqual(false);
      expect(isFullHouse(hand3)).toEqual(false);
      expect(isFullHouse(hand4)).toEqual(true);
    });
  });

  //  FAIL  ./code-challenges.test.js 
  //ReferenceError: isFullHouse is not defined

// b) Create the function that makes the test pass.
// declare variable with a single array as the parameter 

//declare the variable and set the inputing array as the parameter 
const isFullHouse = (array) => {
    // Sort the array in ascending order
    array.sort((a, b) => a - b); 
    // Logic of a full house after the array is sorted
    return (array[0] === array[1] && array[3] === array[4] && (array[2] === array[0] || array[2] === array[4]));
  };
  
// PASS  ./code-challenges.test.js
// codeMessage
//   ✓ takes in a string and returns a string with a coded message. (2 ms)
// filterWordsByLetter
//   ✓ returns an array of words containing the specified letter
// isFullHouse
//   ✓ determines whether the array represents a full house