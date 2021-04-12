function getString(str) {
  switch (str) {
    case '1' :
      console.log('10');
      break;
    case '2' :
      console.log('20');
      break;
    case '3' :
      console.log('30');
      break;
    default:
      console.log('40');
  }
}

getString('3');

function getString2(obj) {
  switch (obj) {
    case firstObj :
      console.log('这是第一个对象');
      break;
    case secondObj :
      console.log('这是第二个对象');
      break;
    case thirdObj :
      console.log('这是第三个对象');
      break;
    default:
      console.log('这是默认的对象');
  }
}

function Person() {}

var firstObj = new Person();
var secondObj = new Person();
var thirdObj = new Person();
var fourthObj = thirdObj;

getString2(firstObj);
getString2(thirdObj);
getString2(fourthObj);
