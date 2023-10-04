function findPallindrome(x){
    const numStr = x.toString();

    const reversedStr = numStr.split('').reverse().join('');


    return numStr === reversedStr;
}


console.log(findPallindrome(101));