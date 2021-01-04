function timeForMilkAndCookies(date) {
	return (date.getMonth() === 11 && date.getDate() === 24);
}

console.log('test 1, should be true:', timeForMilkAndCookies(new Date(2013, 11, 24)));