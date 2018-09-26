var EventUtil = {
    // 获取事件对象
    getEvent: function (event) {
        return event || window.event;
    },
    // 获取事件目标元素
    getTarget: function (event) {
        return event.target || event.srcElement;
    }
};