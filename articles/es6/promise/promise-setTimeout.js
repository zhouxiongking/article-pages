// console.log('1');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('2');

console.log('--------------------------');

// setTimeout(function() {
//     console.log(1);
// }, 0);

// new Promise(function(resolve, reject) {

//     console.log(2);

//     for(var i = 0; i < 10; i++) {
//         i == 9 && resolve();
//     }

//     console.log(3);

// }).then(function() {

//     console.log(4);

// });

// console.log(5);

console.log(1);
setTimeout(function () {
    console.log(2);
    new Promise(function (resolve, reject) {
        console.log(7);
        resolve();
    }).then(function () {
        console.log(8);
    });
}, 1000);
setTimeout(function () {
    console.log(10);
    new Promise(function (resolve, reject) {
        console.log(11);
        resolve();
    }).then(function () {
        console.log(12);
    });
}, 0);
let promise = new Promise(function (resolve, reject) {
    console.log(3);
    resolve();
}).then(function () {
    console.log(4);
}).then(function () {
    console.log(9);
});
console.log(5);
