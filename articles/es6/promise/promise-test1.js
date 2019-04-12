/**
 *  题目1
 */
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
});

promise.then(() => {
    console.log(3);
});

console.log(4);

/**
 * 题目2
 */
const promise2 = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error');
    resolve('success2');
});
promise2
    .then((res) => {
        console.log('then: ', res);
    })
    .catch((err) => {
        console.log('catch: ', err);
    });

/**
 * 题目3
 */
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000);
});

const promise4 = promise3.then(() => {
    throw new Error('error!!!');
});

console.log('promise3', promise3);
console.log('promise4', promise4);

setTimeout(() => {
    console.log('promise3', promise3);
    console.log('promise4', promise4);
}, 2000);

const promise = new Promise((resolve, reject) => {
     resolve('1');
});

promise.then((result) => {
    console.log(result);  // 1
    return 2;
}).then((result) => {
    console.log(result);  // 2
    return 3;
}).then((result) => {
    console.log(result);  // 3
    return 4;
}).then((result) => {
    console.log(result);  // 4
});

/**
 * 题目4
 */
Promise.resolve(1)
    .then((res) => {
        console.log(res);
        return 2;
    })
    .catch((err) => {
        return 3;
    })
    .then((res) => {
        console.log(res);
    });

/**
 * 题目5
 */
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('once');
        resolve('success');
    }, 1000);
});

const start = Date.now();
promise5.then((res) => {
    console.log(res, Date.now() - start);
});

promise5.then((res) => {
    console.log(res, Date.now() - start);
});


