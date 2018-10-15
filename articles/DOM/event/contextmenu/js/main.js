/**
 * Created by zhouxiong on 16/11/16.
 */

(function () {

    // 自定义菜单元素
    var menu = document.querySelector('#context-menu');
    // 自定义菜单状态
    var menuState = 0;
    // 自定义菜单显示样式
    var active = 'context-menu--active';
    // 自定义菜单位置对象
    var menuPosition;
    // 自定义菜单水平位置
    var menuPositionX;
    // 自定义菜单纵向位置
    var menuPositionY;
    // 点击的li元素
    var targetLi;

    function init() {
        //给li添加右键事件
        contextListener();
        //鼠标左键单击事件,左键单击后隐藏menu
        clickListener();
        //keyup事件,当按下ESC键时隐藏menu
        keyupListener();
        //菜单的点击事件
        menuListener();
    }

    /**
     * 给li添加右键事件
     */
    function contextListener() {
        document.addEventListener('contextmenu', function (e) {
            if (clickInContextLister(e)) {
                e.preventDefault();
                targetLi = e.target;
                // 显示自定义菜单
                toggleMenuOn();
                // 定位自定义菜单的位置
                positionMenu(e);
            } else {
                targetLi = null;
                // 隐藏自定义菜单
                toggleMenuOff();
            }
        });
    }

    /**
     * 判断点击位置是否位于li内部
     * @param e
     * @returns {boolean}
     */
    function clickInContextLister(e) {
        var target = e.target || e.srcElement;
        while (target) {
            if (target.nodeName.toUpperCase() === 'LI') {
                return true;
            }
            target = target.parentNode;
        }
        return false;
    }

    /**
     * 鼠标左键单击事件,左键单击后隐藏menu
     */
    function clickListener() {
        document.addEventListener('click', function (e) {
            // 监听鼠标按键,左键1,滚轮是2,右键为3
            var code = e.which || e.button;
            if (code === 1) {
                toggleMenuOff();
            }
        });
    }

    /**
     * 当按下ESC键时隐藏menu
     */
    function keyupListener() {
        window.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                toggleMenuOff();
            }
        });
    }

    /**
     * 右键出现菜单后,点击菜单选项事件
     */
    function menuListener() {
        menu.addEventListener('click', function (e) {
            if (e.target.nodeName.toUpperCase() === 'A') {
                var result = 'the operation is:' + e.target.dataset.action + '\n' +
                    'the id is:' + targetLi.dataset.id;
                alert(result);
            }
        });
    }

    /**
     * 启动程序
     */
    init();

    /**
     * 显示自定义菜单
     */
    function toggleMenuOn() {
        if (menuState !== 1) {
            menuState = 1;
            menu.classList.add(active);
        }
    }

    /**
     * 隐藏自定义菜单
     */
    function toggleMenuOff() {
        if (menuState !== 0) {
            menuState = 0;
            menu.classList.remove(active);
        }
    }

    /**
     * 根据事件触发的位置返回具体的坐标点
     * @param e
     * @returns {{x: number, y: number}}
     */
    function getPosition(e) {
        var posx = 0;
        var posy = 0;

        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        return {
            x: posx,
            y: posy
        }
    }

    /**
     * 定位自定义菜单的位置
     * @param e
     */
    function positionMenu(e) {
        menuPosition = getPosition(e);
        menuPositionX = menuPosition.x + 'px';
        menuPositionY = menuPosition.y + 'px';

        menu.style.left = menuPositionX;
        menu.style.top = menuPositionY;
    }

})();

