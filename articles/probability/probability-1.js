/**
 * 题目:一个人投篮12次,命中8球,命中编号1,未命中编号0,
 * 那么1次投篮的可能性我们可以编码为000011111000
 * 那么这个人连续投中4个球及以上的概率有多大?
 */


const b = [...Array(0xfff + 1)].map((val, i) => i)
           .filter(isContainEightOne)
           .filter(x => x.toString(2).match(/1111/)).length / (0xfff + 1);

// 判断包含8个1,表示投中8次篮
function isContainEightOne(number) {
    let i = 0;
    let count = 0;

    while(i <= number.toString(2).length - 1) {
        count += +number.toString(2).charAt(i);
        i++;
    }
    return count === 8;
}

console.log(b);

