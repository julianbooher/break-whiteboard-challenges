function isFirstSuperior(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++){
		if (arr1[i] > arr2[i]){
			return true;
		}
	}
	return false;
}

// omg, can just do return arr1 > arr2............

console.log('Test 1 - Should be true', isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
console.log('Test 2 - Should be false', isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));