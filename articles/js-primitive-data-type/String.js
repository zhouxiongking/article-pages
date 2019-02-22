var str = 'hello javascript';
var str2 = 'hello css';


String(123);     // '123'
String(123.12);  // '123.12'

String(true);  // 'true'
String(false); // 'false'

String(null);  // 'null'

String(undefined); // 'undefined'

String('this is a string');  // 'this is a string'
String("this is a string");  // 'this is a string'

var obj = {
    name: 'kingx',
    toString: function () {
        var dd = new Date();
        console.log(dd);
        return dd;
    },
    valueOf: function () {
        return [];
    }
};

// console.log(String(obj));

new String('hello javascript');

var str = 'hello';
var str2 = String(str);
var str3 = String('hello');
var str4 = new String(str);
var str5 = new String(str);
var str6 = new String('hello');

str === str2;   // true
str2 === str3;  // true
str3 === str4;  // false
str4 === str5;  // false
str5 === str6;  // false


str === str2 === str3;

str4 !== str5;
str5 !== str6;

str === str4;  // false
str2 === str4; // false

'hello'.indexOf('e');  // 1
'hello'.substring(1);  // 'ello'
'hello'.slice(1);      // 'ello'

// switch(expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     default:
//         statement;
// }

function getString(number) {
    switch (number) {
        case '1':
            console.log('10');
            break;
        case '2':
            console.log('20');
            break;
        case '3':
            console.log('30');
            break;
        default:
            console.log('40');
    }
}

getString(2);
getString(4);

getString(3);
getString(String('3'));
getString(new String('3'));

String('3') === '3';

new String('3') === '3';



function getObj(obj) {
    switch (obj) {
        case firstObj:
            console.log('这就是第一个对象');
            break;
        case secondObj:
            console.log('这就是第二个对象');
            break;
        default:
            console.log('这是独一无二的对象');
    }
}

function Person() {}

var uniqueObj = new Person();
var firstObj = new Person();
var secondObj = new Person();

getObj(firstObj);
getObj(secondObj);
getObj(uniqueObj);