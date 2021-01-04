var uniqueInOrder=function(iterable){
    let returnArray = [];
    for (let i = 0; i < iterable.length; i++){
      if (iterable[i] !== iterable[i - 1]){
        returnArray.push(iterable[i])
      }
    }
    return returnArray;
  }

  console.log('Test 1 , return should be [A, B, C, D, A, B]', uniqueInOrder('AAAABBBCCDAABBB'));