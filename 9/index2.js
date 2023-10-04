function findPallindrome(x) {
  if (x < 0) {
    return false; // negative numbers cannot be pallindrome
  }

  const originalNumber = x;
  let reversedNumber = 0;

  while(x > 0) {
    const lastDigit = x %10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    x = Math.floor(x/10);
  }
  return originalNumber === reversedNumber;
}

console.log(findPallindrome(101));

