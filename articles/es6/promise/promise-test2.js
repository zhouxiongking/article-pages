/**
 * 题目1
 */
Promise.resolve()
    .then(() => {
        console.log(1);
        return new Error('error!!!');
    })
    .then((res) => {
        console.log(2);
        console.log('then: ', res);
    })
    .catch((err) => {
        console.log(3);
        console.log('catch: ', err);
    });

/**
 * 题目2
 */
const promise = Promise.resolve()
    .then(() => {
        return promise;
    });
promise.catch(console.error);

/**
 * 题目3
 */
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log);

/**
 * 题目4
 */
Promise.resolve()
    .then(function success (res) {
        throw new Error('error');
    }, function fail1 (e) {
        console.error('fail1: ', e);
    })
    .catch(function fail2 (e) {
        console.error('fail2: ', e);
    });

/**
 * 题目5
 */
process.nextTick(() => {
    console.log('nextTick')
});

Promise.resolve()
    .then(() => {
        console.log('then')
    });

setImmediate(() => {
    console.log('setImmediate')
});

console.log('end');
