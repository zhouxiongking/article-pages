/**
 * Set-Map
 */

// let arr = [1, 3, 4, 2, 3, 2, 5];
//
// console.log(new Set(arr)); // Set { 1, 3, 4, 2, 5 }
//
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 6];
// let set1 = new Set([...arr1, ...arr2]);
// console.log(set1);  // Set { 1, 2, 3, 4, 5, 6 }

// let set = new Set();
// set.add(1);
// set.add('1');
// console.log(set);  // Set { 1, '1' }


// let set = new Set();
// set.add(NaN);
// set.add(NaN);
// console.log(set);  // Set { NaN }

// let arr = [1, 3, 5, 7];
// // 数组转Set
// let set = new Set(arr);
// console.log(set);  // Set { 1, 3, 5, 7 }
//
// let set = new Set();
// set.add('a');
// set.add('b');
// // Set转数组
// let arr = Array.from(set);
// console.log(arr);  // [ 'a', 'b' ]


// let arr = new Set(['javascript', 'html', 'css']);
//
// for(let key of arr.keys()) {
//     console.log(key);
// }
//
// let set5 = new Set([4, 5, 'hello'])
// console.log('iterate useing Set.keys()')
// for(let item of set5.keys()) {
//     console.log(item)
// }
//
// console.log('iterate useing Set.values()')
// for(let item of set5.values()) {
//     console.log(item)
// }
//
// console.log('iterate useing Set.entries()')
// for(let item of set5.entries()) {
//     console.log(item)
// }
//
// console.log('forEach遍历--------');

// let set5 = new Set([4, 5, 'hello']);
//
// set5.forEach((item, index) => {
//     console.log(item, index);
// });

// let set = new Set(['red', 'green', 'blue']);
//
// for (let item of set.keys()) {
//     console.log(item);
// }
// // red
// // green
// // blue
//
// for (let item of set.values()) {
//     console.log(item);
// }
// // red
// // green
// // blue
//
// for (let item of set.entries()) {
//     console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]

// // 传统的Object类型
// const data = {};
// const element = document.getElementById('btn');
// data[element] = 'first';
// console.log(data); // {[object HTMLHeadingElement]: "first"}

// // Map
// const map = new Map();
// const element = document.getElementById('btn');
// map.set(element, 'first');
// console.log(map.get(element));

// const map = new Map([
//     ['name', 'kingx'],
//     ['age', 123]
// ]);
//
// console.log(map);

// const map = new Map();
//
// map.set(1, 'aaa')
//    .set(1, 'bbb');
//
// map.get(1); // "bbb"

// const map = new Map();
// map.set([0], '0');
// map.set([0], '1');
//
// console.log(map); // Map { [ 0 ] => '0', [ 0 ] => '1' }

// let arr = [0];
// const map = new Map();
// map.set(arr, '0');
// map.set(arr, '1');
//
// console.log(map); // Map { [ 0 ] => '1' }

// let map = new Map();
//
// map.set(-0, 123);
// map.get(+0); // 123
//
// map.set(true, 1);
// map.set('true', 2);
// map.get(true); // 1
//
// map.set(undefined, 3);
// map.set(null, 4);
// map.get(undefined); // 3
//
//
// map.set(NaN, 123);
// map.get(NaN); // 123

// const map = new Map();
// map.set('name', 'kingx');
// map.set('age', 12);
//
// // map.forEach(function (item, key) {
// //     console.log(item, key);
// // });
//
// for (let key of map.keys()) {
//     console.log(key);
// }
// // name
// // age
//
// for (let value of map.values()) {
//     console.log(value);
// }
// // kingx
// // 12
//
// for (let obj of map.entries()) {
//     console.log(obj);
// }
// // [ 'name', 'kingx' ]
// // [ 'age', 12 ]

// const map = new Map();
// map.set('name', 'kingx');
// map.set('age', 12);
//
// const arr = [...map];
// console.log(arr); // [ [ 'name', 'kingx' ], [ 'age', 12 ] ]

const arr = [['name', 'kingx'], ['age', 12]];
const map = new Map(arr);

function mapToObj(map) {
    let obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

console.log(mapToObj(map));  // { name: 'kingx', age: 12 }

// 对象转Map
function objToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
        map.set(k, obj[k]);
    }
    return map;
}
console.log(objToMap({yes: true, no: false}));
// Map {"yes" => true, "no" => false}

// Map转换为JSON,通过对象
function mapToJson(strMap) {
    return JSON.stringify(mapToObj(strMap));
}
let myMap = new Map().set('yes', true).set('no', false);
console.log(mapToJson(myMap)); // '{"yes":true,"no":false}'

// Map转换为JSON,通过数组
function mapToArrayJson(map) {
    return JSON.stringify([...map]);
}

let myMap2 = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap2); // [[true,7],[{"foo":3},["abc"]]]

// JSON转换为Map
function jsonToMap(jsonStr) {
    // 先转换为JSON对象,再转换为Map
    return objToMap(JSON.parse(jsonStr));
}
jsonToMap('{"yes": true, "no": false}'); // Map { 'yes' => true, 'no' => false }

// Set转换为Map
function setToMap(set) {
    return new Map(set);
}
const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
console.log(setToMap(set)); // Map { 'foo' => 1, 'bar' => 2 }

// Map实例转换为Set
function mapToSet(map) {
    let set = new Set();
    for (let [k,v] of map) {
        set.add([k, v])
    }
    return set;
}

const map14 = new Map()
    .set('yes', true)
    .set('no', false);
mapToSet(map14); // Set { [ 'yes', true ], [ 'no', false ] }
