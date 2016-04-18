// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// for (var i = 0; i <= 10; i++){
//   console.log(i);
// }
// console.log("yay");

// for(var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF");


// Hint: Use a for loop!

// // Exercise #2:

var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// for(i=0; i<numbers.length; i++){
//   console.log(numbers[i]);
// }

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// sum = 0;
// for (i=0; i<numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum/numbers.length);

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum / numbers.length);


// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

// for (var i=1; i<=100; i++) {
//   if (i%15 === 0){
//     console.log(i + " is FizzBuzz");
//   }else if (i%5 === 0) {
//     console.log(i + " is Buzz");
//   }else if (i%3 === 0) {
//     console.log(i + " is Fizz")
//   }else {
//     console.log(i + " is nothing special");
//   }
// }




// for(var i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FIZZBUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else {
//     console.log(i);
//   }
// }


// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)

function number_game(){
var i = 0;
// var target = Math.floor((Math.random() * 100) + 1);
var target = 10;
do {
    var guess = parseInt(prompt("pick a number between 1 and 100"));

    if(guess < target){
      console.log("guess higher");
    }else if (guess > target){
      console.log("guess lower");
    }
    else{
      console.log("You Win!");
      i = 20;
    }
    i++;
}
while (i < 10);

if (i === 10){
  console.log("You Lose!");
}
}



// For example:
// var guess = prompt("Guess a number");

// var answer = Math.floor((Math.random() * 100) + 1);
// for (var i = 0; i < 10; i++) {
// var guess = prompt("Guess a Number");
//   if (guess < answer) {
//     console.log("Hey You, Guess Higher!");
//   } else if (guess > answer) {
//     console.log("Hey, Guess Lower Loser!");
//   } else {
//     console.log("You Win! (This Time....)");
//     break;
//   }
// }





// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

// function add(number_1, number_2) {
//   return number_1 + number_2
// }
function add_two(number1, number2){
  return number1 + number2;
}

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

function average(){
var sum = 0;
var number_array = [];
var number_numbers = parseInt(prompt());
for (var i = 0; i<number_numbers; i++){
  number_array.push(parseInt(prompt("Number " + number_numbers + " please." )));
}
for(var i = 0; i<number_array.length; i++){
  sum += number_array[i];
}
return sum/number_array.length;
}

// var user_numbers = [];
// for(var i = 0; i < 5; i++) {
//   user_numbers.push(parseInt(prompt("Enter a number")));
// }

// function average(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return (sum / numbers.length);
// }

// console.log(average(user_numbers));



// // Exercise #8:

// var book = {
//   title: "Cat in the Hat",
//   author: "Dr. Seuss",
//   isbn: 4234234234234234,
//   pages: 32,
//   yearOfPublication: 1962
// };

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.
var book = {
  title: "book",
  author: "bookman",
  pages: 200,
  published: 1990,
  show: function(){
    console.log(this.title + "," + this.author + "," + this.pages);
  }
};

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 

// var book = {
//   title: "Cat in the Hat",
//   author: "Dr. Seuss",
//   isbn: 6392770,
//   pages: 32,
//   yearOfPublication: 1962,
//   printInfo: function() {
//     console.log(this.title + ", " + this.author + ", " + this.isbn + ", " + this.pages + ", " + this.yearOfPublication);
//     hello();
//   }
// };


// function hello() {
//   alert("can I do this?");
// }

