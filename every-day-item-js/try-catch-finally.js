/**
 * 程序中的异常捕获​
 */

// 调用后台接口
// try {
//   const fn = function () {
//     const data = null;
//     // doSomething
//     return data;
//   };
//   const data = fn();
//   console.log(data.person.name);
// } catch (error) {
//   console.log(error.message);
// }

// console.log('after fn');


// 1. try catch执行顺序
// try {
//   console.log(1);
//   throw new Error('Error1');
//   console.log(2); // 后续代码不会执行
// } catch (e) {
//   console.log(e.message);
// }
// console.log('outter1');

// 2. try catch finally
// try {
//   console.log(4);
//   throw new Error('Error2');
//   console.log(5);
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log(6);
// }
// console.log('outter2');


// 3. catch中throw
// try {
//   try {
//     console.log(7);
//     throw new Error('Error3');
//     console.log(8);
//   } catch (e) {
//     console.log(e.message);
//     throw new Error('Error4');
//     console.log(9);
//   } finally {
//     console.log(10);
//   }
// } catch (err) {
//   console.log(err.message);
// }
// console.log('outter3');


// 4. try中包含return语句
// function fn1() {
//   try {
//     console.log(11);
//     return 'fn1-1';
//   } catch (e) {
//     console.log(e.message);
//   } finally {
//     console.log(12);
//   }
//   console.log('outter4');
//   return 'fn1-3';
// }
// const fn1Result = fn1();
// console.log('fn1Result:', fn1Result);

// 5. catch中包含return语句
// function fn2() {
//   try {
//     console.log(13);
//     throw new Error('error5');
//   } catch (e) {
//     console.log(e.message);
//     return 'fn2-2';
//   } finally {
//     console.log(14);
//   }
//   console.log('outter5');
//   return 'fn2-3';
// }
// const fn2Result = fn2();
// console.log('fn2Result:', fn2Result);

// 6. finally中的语句会不会影响到return的值?
// function fn3() {
//   let a = { name: '11' };
//   try {
//     console.log(14);
//     a.name = '22';
//     return a;
//   } catch (e) {

//   } finally {
//     console.log(14);
//     a.name = '33';
//     console.log('finally a: ', a); // { name: '33' }
//   }
//   console.log('outter5');
//   return 'fn2-3';
// }
// const fn3Result = fn3();
// console.log('fn3Result:', fn3Result);

// 7. finally中进行return会不会影响到最终的return值
function fn4() {
  let a = 1;
  try {
    console.log(15);
    a = 2;
    return a; // a = 2
  } catch (e) {

  } finally {
    console.log(16);
    a = 3; // a = 3
    console.log('finally a: ', a);
    return a;
  }
  console.log('outter5');
  return 'fn2-3';
}
const fn4Result = fn4();
console.log('fn4Result:', fn4Result);


// 知识点总结：
// 1. catch用于捕获当前try中抛出的异常，
//    如果catch中抛出异常，则需要在外层才能捕获
// 2. 不管try和catch的执行情况怎么样，finally都会被执行，
//    即使其中包含return
// 3. try或者catch中return的值在进入finally之前会提前进行保存
//    finally中的执行语句不会改变return的值
// 4. 如果在finally中有return，程序会提前退出，
//    返回的值不是try或者catch中保存的值