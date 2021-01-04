function isSquare(n) {
    if (n < 0) {
        return false;
    } else {
        for (let i = 0; i <= n; i++) {
            console.log('inside loop,', i * i)
            if (i * i === n) {
                return true
            }
        }
    }
}

console.log('Test 1, should be true', isSquare(0));