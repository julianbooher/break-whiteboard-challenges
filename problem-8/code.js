function areaOfCountry(name, area) {
	let returnArea = (area / 148940000) * 100;
	return `${name} is ${returnArea.toFixed(2)}% of the total world's landmass`
}

console.log('Test 1 - should be: \"Iran is 1.11% of the total world\'s landmass\" - ', areaOfCountry("Iran", 1648195))