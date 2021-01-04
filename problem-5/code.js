function findSingleNumber(numbers) {
	let returnNumber = null;
	for (let i = 0; i < numbers.length; i++){
		if (numbers.filter(number => number === numbers[i]).length === 1){
			returnNumber = numbers[i];
		}
	}
	return returnNumber;
}

console.log('test 1, result should be 101', findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]));