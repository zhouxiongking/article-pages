const obj = {
  fun1: function () {
    console.log(this);
    return () => {
      console.log(this);
    };
  },
  fun2: function () {
    return function () {
      console.log(this);
      return () => {
        console.log(this);
      };
    };
  },
  fun3: () => {
    console.log(this);
  },
};

let f1 = obj.fun1(); // obj
f1(); // obj

let f2 = obj.fun2();
let f2_2 = f2(); // window
f2_2(); // window

obj.fun3(); // window
