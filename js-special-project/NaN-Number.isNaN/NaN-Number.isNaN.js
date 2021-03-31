console.log(isNaN(NaN));  // true
console.log(isNaN(23));   // false
console.log(isNaN('d'));  // true
console.log(isNaN('0xd'));  // false
console.log(isNaN('32131sdasd')); // true
console.log(NaN === NaN);  // false
console.log(NaN === undefined);  // false
console.log(typeof NaN);  // number
console.log(Object.prototype.toString.call(NaN)); // [object Number]

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(23));  // false
console.log(Number.isNaN('ds'));  // false
console.log(Number.isNaN('32131sdasd'));  // false
