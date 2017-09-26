

for ( var number = 1; number < 100; number++) {

	if ( number % 3 === 0 && number % 5 === 0 ) {
		console.log("FIZZBUZZ");
	} else if (number % 5 === 0) {
		console.log("BUZZ");
	} else if ( number % 3 === 0 ){
		console.log("FIZZ");
	} else {
		console.log(number);
	}

}



