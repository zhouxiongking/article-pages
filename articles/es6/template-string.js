/**
 * 模板字符串
 */

// let str = 'Hello, my name is kingx, ' +
//           'I am working Beijng.';
//
// console.log(str);
//
// let str2 = `Hello, my name is kingx,
//             I am working Beijng.`;
// console.log(str2);

// var person = {
//     name: 'kingx',
//     address: 'Beijing'
// };
// var str = 'Hello, my name is ' + person.name + ', ' +
//           'I am working ' + person.address + '.';
// console.log(str);

// let person = {
//     name: 'kingx',
//     address: 'Beijing'
// };
// let str = `Hello, my name is ${person.name}
//            I am working ${person.address}`;
// console.log(str);

// let x = 1,
//     y = 2;
// console.log(`${x} + ${y * 2} = ${x + y * 2}`); // 1 + 4 = 5
//
// let obj = {x: 1, y: 2};
// console.log(`${obj.x + obj.y}`); //  3
//
//
// function fn() {
//     return "Hello World";
// }
// console.log(`foo ${fn()} bar`); // foo Hello World bar


// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;

const tmpl = function (addrs) {
    return `
        <table>
            ${addrs.map(addr => `
                <tr><td>${addr.provice}</td></tr>
                <tr><td>${addr.city}</td></tr>
            `).join('')}
        </table>
    `;
};
const addrs = [{
    provice: '湖北省',
    city: '武汉市'
}, {
    provice: '广东省',
    city: '广州市'
}];
console.log(tmpl(addrs));







