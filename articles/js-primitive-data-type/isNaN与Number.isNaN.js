isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false，Number(true)会转换成数字1
isNaN(null);      // false，Number(null)会转换成数字0
isNaN(1);         // false
isNaN('');        // false,Number('')会转换为成数字0

isNaN("1");            // false，字符串"1"可以转换成数字1
isNaN("Javascript");   // true，字符串"Javascript"无法转换成数字
// Date类型
isNaN(new Date());     // false
isNaN(new Date().toString());  // true

Number.isNaN(NaN);        // true
Number.isNaN(undefined);  // false
Number.isNaN(null);       // false
Number.isNaN(true);       // false
Number.isNaN('');         // false
Number.isNaN(123);        // false

if (!Number.isNaN) {
    Number.isNaN = function (n) {
        return n !== n;
    }
}

Number(1);  // 1
Number(1.2); // 1.2

Number(true); // 1
Number(false); // 0

Number(null); // 0
Number(undefined); // NaN

Number('21');  // 21
Number('012'); // 12

Number('0.12');  // 0.12
Number('00.12'); // 0.12

Number('0x12');  // 18
Number('0x21');  // 33

Number('010');   // 10
Number('0020');  // 20


Number('');  // 0
Number('   ');  // 0

Number('123a');  // NaN
Number('a1.1');  // NaN
Number('abc');   // NaN

var obj = {
    age: 21,
    valueOf: function () {
        return this.age;
    },
    toString: function () {
        return 'good';
    }
};

Number(obj);

var obj = {
    age: '21',
    valueOf: function () {
        return [];
    },
    toString: function () {
        return [];
    }
};

// Number(obj);

parseInt(6e3, 10);
parseInt(6e3, 16);
parseInt('6e3', 10);
parseInt('6e3', 16);

parseInt('0x12', 16);  // 18
parseInt('0x12', 10);  // 0

parseInt(0x12, 16);

parseInt('6.01', 10);
parseInt('6.99', 10);

parseInt(15 * 3, 10);   // 45
parseInt('15 * 3', 10); // 15

var arr = ['12', '45', '31', '41'];

var result = arr.map(parseInt);

console.log(result);

arr.map(function (val, index) {
    return parseInt(val, index);
});

parseInt('1', 0);
parseInt('2', 1);
parseInt('3', 2);
parseInt('4', 3);

var arr = ['1', '2', '3', '4'];

var result = arr.map(function (val) {
    return parseInt(val, 10);
});

console.log(result);

parseFloat('+1.2');  // 1.2
parseFloat('-1.2');  // -1.2
parseFloat('++1.2'); // NaN
parseFloat('--1.2'); // NaN
parseFloat('1+1.2'); // 1

parseFloat('  1.2'); // 1.2
parseFloat('f1.2');  // NaN

parseFloat('4e3');   // 4000
parseInt('4e3', 10); // 4

parseFloat('11.20');  // 11.2
parseFloat('11.2.1'); // 11.2

parseFloat("123AF");　　// 123
parseFloat("0xA");　　　// 0
parseFloat("22.5");　　 // 22.5
parseFloat("22.3.56"); // 22.3
parseFloat("0908.5");　// 908.5

// 加法
// 0.1 + 0.2 = 0.30000000000000004
// 0.7 + 0.1 = 0.7999999999999999
// 0.2 + 0.4 = 0.6000000000000001
// 2.22 + 0.1 = 2.3200000000000003
//
// // 减法
// 1.5 - 1.2 = 0.30000000000000004
// 0.3 - 0.2 = 0.09999999999999998
//
// // 乘法
// 19.9 * 100 = 1989.9999999999998
// 19.9 * 10 * 10 = 1990
// 1306377.64 * 100 = 130637763.99999999
// 1306377.64 * 10 * 10 = 130637763.99999999
// 0.7 * 180 = 125.99999999999999
// 9.7 * 100 = 969.9999999999999
// 39.7 * 100 = 3970.0000000000005

// 除法
// 0.3 / 0.1 = 2.9999999999999996
// 0.69 / 10 = 0.06899999999999999
//
// 0.1 * 2 = 0.2 ====== 取出整数部分0
//
// 0.2 * 2 = 0.4 ====== 取出整数部分0
//
// 0.4 * 2 = 0.8 ====== 取出整数部分0
//
// 0.8 * 2 = 1.6 ====== 取出整数部分1
//
// 0.6 * 2 = 1.2 ====== 取出整数部分1
//
// 0.2 * 2 = 0.4 ====== 取出整数部分0
//
// 0.4 * 2 = 0.8 ====== 取出整数部分0
//
// 0.8 * 2 = 1.6 ====== 取出整数部分1
//
// 0.6 * 2 = 1.2 ====== 取出整数部分1

//   0.0001 1001 1001 1001 1001 1001 1001 1001 1001 1001 1001 1001 1001
// + 0.0011 0011 0011 0011 0011 0011 0011 0011 0011 0011 0011 0011 0011
// = 0.0100 1100 1100 1100 1100 1100 1100 1100 1100 1100 1100 1100 1100


const operationObj = {
    /**
     * 处理传入的参数,不管传入的是数组或者逗号分割的参数都处理为数组
     * @param args
     * @returns {*}
     */
    getParam(args) {
        return Array.prototype.concat.apply([], args);
    },

    /**
     * 校验是否是合法的数字
     * @param num
     * @returns {boolean}
     */
    isInValidNum(...args) {
        let calArr = this.getParam(args);
        return calArr.some((item) => {
            return !this.regUtil.regObj.floatNumReg.test(item);
        });
    },

    /**
     * 获取每个数的乘数因子,根据小数位数计算
     * 例如2的乘数因子为1, 2.01的乘数因子为100
     * @param x
     * @returns {number}
     */
    multiplier(x) {
        let parts = x.toString().split('.');
        return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
    },

    /**
     * 获取多个数据中最大的乘数因子
     * 例如1.3和2.13的乘数因子为100
     * @returns {*}
     */
    correctionFactor() {
        let args = Array.prototype.slice.call(arguments);
        let argArr = this.getParam(args);
        return argArr.reduce((accum, next) => {
            let num = this.multiplier(next);
            return Math.max(accum, num);
        }, 1);
    },


    /**
     * 加法运算
     * @param args
     * @returns {number}
     */
    add(...args) {
        let calArr = this.getParam(args);
        let corrFactor = this.correctionFactor(calArr);
        let sum = calArr.reduce((accum, curr) => {
            return accum + Math.round(curr * corrFactor);
        }, 0);

        return sum / corrFactor;
    },

    /**
     * 减法运算
     * @param args
     * @returns {number}
     */
    subtract(...args) {
        let calArr = this.getParam(args);
        let corrFactor = this.correctionFactor(calArr);
        let diff = calArr.reduce((accum, curr, curIndex) => {
            if (curIndex === 1) {
                return Math.round(accum * corrFactor) - Math.round(curr * corrFactor);
            }
            return Math.round(accum) - Math.round(curr * corrFactor);
        });

        return diff / corrFactor;
    },

    /**
     * 乘法运算
     * @param args
     * @returns {*}
     */
    multiply(...args) {
        let calArr = this.getParam(args);
        let corrFactor = this.correctionFactor(calArr);
        calArr = calArr.map((item) => {
            return item * corrFactor;
        });
        let multi = calArr.reduce((accum, curr) => {
            return Math.round(accum) * Math.round(curr);
        }, 1);

        return multi / Math.pow(corrFactor, calArr.length);
    },

    /**
     * 除法运算
     * @param args
     * @returns {*}
     */
    divide(...args) {
        let calArr = this.getParam(args);
        let quotient = calArr.reduce((accum, curr) => {
            let corrFactor = this.correctionFactor(accum, curr);
            return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
        });

        return quotient;
    }
};

console.log(operationObj.add(0.1, 0.7));
console.log(operationObj.subtract(0.3, 0.2));
console.log(operationObj.multiply(0.7, 180));
console.log(operationObj.divide(0.3, 0.1));