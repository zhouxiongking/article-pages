// 算法1
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// 算法2
function reverseString2(str) {
    var result = '';
    for(var i = str.length - 1; i >= 0; i--){
        result += str.charAt(i);
    }
    return result;
}

// 算法3
function reverseString3(strIn,pos,strOut){
    if(pos<0)
        return strOut;
    strOut += strIn.charAt(pos--);
    return reverseString3(strIn,pos,strOut);
}

var strIn = 'abcdefg';
var pos = strIn.length - 1;
var strOut = '';

console.log(reverseString3(strIn,pos,strOut));

// 算法4
function reverseString4(str) {
    var arr = Array.prototype.slice.call(str);

    return arr.reverse().join('');
}

console.log(reverseString4('abcdefg'));


function stack() {
    this.data = []; //保存栈内元素
    this.top = 0; //记录栈顶位置
}

stack.prototype = {
    push: function push(element) { //入栈:先在栈顶添加元素，然后元素个数加1
        this.data[this.top++] = element;
    },
    pop: function pop() { //出栈：先返回栈顶元素，然后元素个数减1
        return this.data[--this.top];
    },
    length: function () { //返回栈内的元素个数，即长度
        return this.top;
    }
};

// 算法5
function reverseString5(str) {   //利用这个栈实现字符串逆置输出
    var s = new stack();        //创建一个栈的实例
    var arr = str.split('');   //将字符串转成数组
    var len = arr.length;
    var result = '';
    for(var i = 0; i < len; i++){  //将元素压入栈内
        s.push(arr[i]);
    }
    for(var i = 0; i < len; i++){  //输出栈内元素
        result += s.pop(i);
    }

    return result;
}

var str = 'abcdefgds';
// 算法3的变量
var pos = str.length;
var result = '';
console.log(reverseString1(str));
console.log(reverseString2(str));
console.log(reverseString3(str, pos, result));
console.log(reverseString4(str));
console.log(reverseString5(str));


