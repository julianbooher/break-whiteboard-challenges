// Using built in exponentiation 

function shiftToLeft(x, y) {
	return x * (2 ** y);
}

// using for loop.

function shiftToLeftTwo(x, y){
    let mutliplier = 1;
    for (i = 0; i < y; i++){
        multiplier *= 2;
    }
    return x * multiplier;
}