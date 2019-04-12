/**
 * Created by zhouxiong on 2019/4/12.
 */
function Counter() {
    this.sum = 0;
    this.add = function () {
        this.sum += 1;
    };
    this.show = function () {
        console.log(this.sum);
    };
}

export let c = new Counter();