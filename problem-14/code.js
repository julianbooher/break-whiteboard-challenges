function longest(s1, s2) {
    let letterArray = [];
    let combinedStrings = s1 + s2;
    for (let i = 0; i < combinedStrings.length; i++){
      if (letterArray.indexOf(combinedStrings[i]) == -1){
        letterArray.push(combinedStrings[i])
      }
    }
    return letterArray.sort().join('');
  }

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"

console.log(longest(a, b));