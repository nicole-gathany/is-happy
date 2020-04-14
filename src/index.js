var isHappy = function(n) {
  let beenHereBefore = {};
  while (n !== 1 && !beenHereBefore[n]) {
    beenHereBefore[n] = true;
    n = sumSqDigits(n);
  }
  console.log(beenHereBefore);
  return n === 1 ? true : false;
};

let sumSqDigits = function(number) {
  return number
    .toString()
    .split("")
    .map(a => parseInt(a, 10))
    .reduce(function(sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
};

//should return true
console.log(isHappy(19), isHappy(23), isHappy(7));
console.log(isHappy(1));

//should return false
console.log(isHappy(2));
console.log("hello");
