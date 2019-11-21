// Create a function that will get the sum of the numbers between 1 and n and return the answer 
// summation(5) // should return 15 because 1+2+3+4+5=15
const summation = function (num) {
    let sum;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Create a program to get the sum of all the even numbers in a group 
// summationEven(5) // should return 6 because 2+4=6
const summation = function (num) {
    let sum;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }

    }
    return sum;
}

// Create a function to get the average of a group of numbers 
// avg([8, 2, 2, 4]) // should return 4
const avg = function (numsArray) {
    let total = 0;
    for (let i = 0; i < numsArray.length; i++) {
        total += numsArray[i];
    }
    return total / numsArray.length;
}

// Create a function to reverse the letters in a word 
// reverse("caterpillar") // should return "rallipretac"
const reverse = function (word) {
    let lettersArray = word.split('');
    return lettersArray.reverse().join('');
}

// Create a function that takes an array of words and combines them with a dash 
// addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
const addDashes = function (wordsArray) {
    return wordsArray.join('-');
}

// Function that will count up to a number and back down and return a string of the climb 
// countUpAndDown(3) // should return "1 2 3 2 1"
const countUpAndDown = function (num) { 
    let result = []
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    for (let i = num; i >= 1; i--) {
        result.push(i);
    }
    return result.join(" ");
}

// Write a function that will tell you all of the words in an array that contain the letter `a` 
// wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']
const wordsWithA = function(wordsArray) {
    const solutionArray = []
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].indexOf('a') >= 0) {
            solutionArray.push(wordsArray[i])
        }
    }
    return solutionArray;
}

// Write a function that will tell you all of the words in an array that contain a specified letter 
// wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
const wordsWithLetter= function(letter, wordsArray) {
    const solutionArray = []
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].indexOf(letter) >= 0) {
            solutionArray.push(wordsArray[i])
        }
    }
    return solutionArray;
}

// Function that returns the longest word in sentence 
// longestWord("The cat in the house") // should return "house"
const longestWord= function(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

// Function that returns the largest even number 
// largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
const largestEvenNumber= function(numbersArray) {
    let largestEven = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if ( (numbersArray[i] % 2 === 0) && (numbersArray[i] > largestEven) ) {
            largestEven = numbersArray[i];
        }
    }
    return largestEven;
}
