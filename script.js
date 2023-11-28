console.log("live coding enabled");

// A Polyfill is a piece of code used to provide
// modern functionality on older browsers
// that do not natively support it.

// 1st we will go with map function

// declaring and initiating an array
const arr = [1, 2, 3];

// standard syntax of map function
const newArr = arr.map(function (item) {
  return item * 2;
});
//same syntax with arrow function
// const newArr = arr.map((item) => item * 2);

// printing new array returned by map function
console.log(newArr);

// polyfill for map function
Array.prototype.map2 = function (callbackFunction) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFunction(this[i]));
  }
  return newArr;
};

let result = arr.map2((item) => item * 2);
console.log(result);

//======= filter method with polyfill ==========//

// declaring and initiating an array
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// standard syntax of filter function
const newArr2 = arr2.filter((item) => item % 2 === 0);
// printing new array returned by filter function
console.log(newArr2);

//polyfill for filter function
Array.prototype.filter2 = function (callbackFunction) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFunction(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

const newArr3 = arr2.filter2((item) => item % 2 === 0);
console.log(newArr3);

//======= reduce method with polyfill ==========//

// declaring and initiating an array
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

// standard syntax of reduce function
const sum = arr4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// printing output returned by reduce function
console.log(sum);

//polyfill for filter function
Array.prototype.reduce2 = function (callbackFunction, initialValue = 0) {
  let ans = initialValue;
  for (let i = 0; i < this.length; i++) {
    ans = callbackFunction(ans, this[i]);
  }
  return ans;
};

const ans = arr4.reduce2((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(ans);
