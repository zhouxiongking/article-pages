self.addEventListener('message', function (evt) {
    console.log('接收到主线程的数据:', evt.data);
    evt.data.name = 'kingx2';
    self.postMessage(evt.data);
});

// self.addEventListener('error', function () {
//     console.log('invke');
// });

// this.addEventListener('message', function (evt) {
//     // do something
// });
//
// addEventListener('message', function (evt) {
//     // do something
// });
//
// onmessage = function (evt) {
//     // do something
// };
