function ZoomPic() {
	this.initialize.apply(this, arguments)
}
ZoomPic.prototype =
{
	initialize: function (id) {
		var _this = this;
		this.wrap = typeof id === "string" ? document.getElementById(id) : id;
		this.oUl = this.wrap.getElementsByTagName("ul")[0];
		this.aLi = this.wrap.getElementsByTagName("li");
		this.timer = null;
		this.aSort = [];
		this.options = [
			{ width: 210, height: 297, top: 30, left: 5 },
			{ width: 210, height: 297, top: 30, left: 230 },
			{ width: 252, height: 356, top: 0, left: 455 },
			// { width: 210, height: 297, top: 30, left: 478 },
			{ width: 210, height: 297, top: 30, left: 725 },
			{ width: 210, height: 297, top: 30, left: 952 },
			{ width: 210, height: 297, top: 30, left: 1187 },
			{ width: 210, height: 297, top: 30, left: 1297 },
			{ width: 210, height: 297, top: 30, left: 1517 },
			{ width: 210, height: 297, top: 30, left: 1737 },
			{ width: 210, height: 297, top: 30, left: 1957 },
			{ width: 210, height: 297, top: 30, left: 2177 },
			{ width: 210, height: 297, top: 30, left: 2397 },
			{ width: 210, height: 297, top: 30, left: 2617 },
			{ width: 210, height: 297, top: 30, left: 2837 },
			{ width: 210, height: 297, top: 30, left: 3057 },
		];
		for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i];
		this.aSort.unshift(this.aSort.pop());
		this.setUp();
		setTimeout(() => {
			_this.reduce();
		}, 2000);
		this.timer = setInterval(function () {
			_this.doNext();
			setTimeout(() => {
				_this.enlarge();
			}, 800);
			setTimeout(() => {
				_this.reduce();
			}, 2500);
		}, 3000);
		// this.wrap.onmouseover = function () {
		// 	clearInterval(_this.timer)
		// };
		// this.wrap.onmouseout = function () {
		// 	_this.timer = setInterval(function () {
		// 		_this.doNext()
		// 	}, 3000);
		// }
	},
	enlarge: function () {
		var enlarge = { width: 252, height: 356, top: 0, left: 455 };
		this.options[2] = enlarge;
		this.cur(2, enlarge);
	},
	reduce: function () {
		var reduce = { width: 210, height: 297, top: 30, left: 478 };
		this.options[2] = reduce;
		this.cur(2, reduce);
	},
	cur: function (index, newAttrObj) {
		var _this = this;
		var target = _this.aSort[index]
		$(target).animate(newAttrObj, { duration: 300, easing: "linear" })
	},
	doNext: function (type) {
		this.aSort.push(this.aSort.shift());
		this.setUp();
	},
	setUp: function () {
		var _this = this;
		var i = 0;
		for (i = 0; i < this.aSort.length; i++) this.oUl.appendChild(this.aSort[i]);
		for (i = 0; i < this.aSort.length; i++) {
			this.aSort[i].index = i;
			this.doMove(this.aSort[i], this.options[i]);
		}
	},
	addEvent: function (oElement, sEventType, fnHandler) {
		return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
	},
	css: function (oElement, attr, value) {
		if (arguments.length == 2) {
			return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
		}
		else if (arguments.length == 3) {
			switch (attr) {
				case "width":
				case "height":
				case "top":
				case "left":
				case "bottom":
					oElement.style[attr] = value + "px";
					break;
				default:
					oElement.style[attr] = value;
					break
			}
		}
	},
	doMove: function (oElement, oAttr) {
		if (!oElement) return;
		var _this = this;
		clearInterval(oElement?.timer);
		oElement.timer = setInterval(function () {
			var bStop = true;
			for (var property in oAttr) {
				var iCur = parseFloat(_this.css(oElement, property));
				var iSpeed = (oAttr[property] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if (iCur != oAttr[property]) {
					bStop = false;
					_this.css(oElement, property, iCur + iSpeed)
				}
			}
			if (bStop) {
				clearInterval(oElement.timer);
			}
		}, 30)
	}
};
window.onload = function () {
	new ZoomPic("box");
};