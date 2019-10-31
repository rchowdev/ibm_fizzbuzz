/* Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz“. */
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      //Divisible by 5 and 3
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      //Divisible by 3
      console.log("Fizz");
    } else if (i % 5 === 0) {
      //Divisible by 5
      console.log("Buzz");
    } else {
      //Not Divisible by 3 or 5
      console.log(i);
    }
  }
}

fizzbuzz();
