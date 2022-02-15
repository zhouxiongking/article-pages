var test = (function(i) {
  return function () {
    console.log(i * 2);
  }
}(2));
test(5);