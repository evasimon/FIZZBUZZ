
// Write a script that prints the numbers 1 to 100 in the console.
for ( var number = 1; number < 100; number++) {

	// print `FizzBuzz` for multiples of both three and five
	if ( number % 3 === 0 && number % 5 === 0 ) {
		console.log("FIZZBUZZ");

	// print 'Buzz' for multiples of five, instead of the number	
	} else if (number % 5 === 0) {
		console.log("BUZZ");

	// print `Fizz` for multiples of three, instead of the number	
	} else if ( number % 3 === 0 ){
		console.log("FIZZ");

	} else {
		console.log(number);
		
	}

}



