// 箭头函数，自己没有this，
// 函数创建的时候，所在的作用域空间中的this

var _name = 'global';
var obj = {
  func() {
    const innerFunc = () => {
      console.log(this._name);
    }
    return innerFunc;
  },
  _name: 'local',
};

// 语句1
// obj.func()(); // obj.func() -> 创建
// this -> obj -> local

// 语句2
var func = obj.func; // func -> window
func()();
// func() -> this -> window innerFunc
// func()() -> window -> global

// 语句3
obj.func.bind({ _name: 'newObj' })()();
// 
var newFunc = obj.func.bind({ _name: 'newObj' });
// this -> { _name: 'newObj' };
// newFunc() -> innerFunc() -> _name: newObj

// 语句4
obj.func.bind()()();
// bind没有传入自定义this的时候，null，undefined，
// 继续指向原来的this
var newFunc = obj.func.bind();
newFunc()(); // global

// 语句5
obj.func.bind({ _name: 'bindObj' }).apply({ _name: 'applyObj' })();
// this一旦被bind后，就不会再被call和apply修改
// obj.func.bind({ _name: 'bindObj' })
// this -> { _name: 'bindObj' }
// apply -> { _name: 'bindObj' } -> bindObj