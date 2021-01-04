function addUp(num) {
	let returnNumber = 0;
	for (let i = 0; i <= num; i++){
		returnNumber += i;
	}
	return returnNumber;
}

console.log('test 1 should be 180300', addUp(600));