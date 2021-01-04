function countTrue(arr) {
	let returnCount = 0;
	for(let i = 0; i < arr.length; i++){
		if (arr[i] === true){
			returnCount++;
		}
	} 
	return returnCount;
}

console.log('Test 1, should be 2:', countTrue([true, false, false, true, false]));

console.log('Test 2, should be 0:', countTrue([false, false, false, false]));

