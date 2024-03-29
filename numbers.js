function calculateDistance(x1, x2) {
    return Math.abs(x2 - x1);
  }
  
console.log(calculateDistance(3, 10));
console.log(calculateDistance(-5, 5));
export{calculateDistance}

function calculateSegmentProduct(A, B, C) {
    const lengthAC = Math.abs(C - A);
    const lengthBC = Math.abs(B - C);
    return lengthAC * lengthBC;
  }
  
  console.log(calculateSegmentProduct(2, 8, 5));
  export{calculateSegmentProduct}

  function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
  }
  
  console.log(calculateKilobytes(2048));
  export{calculateKilobytes}

  function calculateSegments(lengthA, lengthB) {
    return Math.floor(lengthA / lengthB);
  }
  
  console.log(calculateSegments(10, 3));
  export{calculateSegments}

  function calculateDigitSum(twoDigitNumber) {
    first_num = Math.floor(twoDigitNumber % 10);
    second_num = Math.floor (twoDigitNumber / 10);
    return Math.abs (first_num + second_num);
}

console.log(calculateDigitSum(27));
export{calculateDigitSum}

function swapHundredsAndTens(threeDigitNumber) {
    const hundreds = Math.floor(threeDigitNumber / 100);
    const tens = Math.floor((threeDigitNumber / 10) % 10);
    const ones = threeDigitNumber % 10;
    return tens * 100 + hundreds * 10 + ones;
}

console.log(swapHundredsAndTens(456));
export{swapHundredsAndTens}

function getHundredsDigit(number) {
    if (number > 999)
    return Math.floor(number / 100) % 10;
}

console.log(getHundredsDigit(1422));
export{getHundredsDigit}

function getFullHours(seconds) {
    return Math.floor(seconds / 3600);
    return Math.floor(seconds / 7200);
    return Math.floor(seconds / 10800);
}

console.log(getFullHours(3600));
export{getFullHours}

function getDayOfWeek(dayOfYear) {
    const firstDayOfWeek = 1;
    const dayOfWeek = (firstDayOfWeek + dayOfYear - 1) % 7;
    return dayOfWeek;
  }
  
  console.log(getDayOfWeek(1));
  export{getDayOfWeek}

  function countSquares(A, B, C) {
    const horizontalSquares = Math.floor(A / C);
    const verticalSquares = Math.floor(B / C);
    return horizontalSquares * verticalSquares;
  }
  
  console.log(countSquares(4, 6, 2));
  export{countSquares}
