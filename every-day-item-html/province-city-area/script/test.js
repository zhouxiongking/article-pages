//****************针对第一种方式的具体js实现部分******************//
//****************所使用的数据是city.js******************//
var btn = document.getElementById("confirm");
var addrShow = document.getElementById("addr-show");
var prov = document.getElementById("prov");
var city = document.getElementById("city");
var county = document.getElementById("county");

/*用于保存当前所选的省市区*/
var current = {
  prov: "",
  city: "",
  county: "",
};

/*自动加载省份列表*/
(function showProv() {
  btn.disabled = true;
  var len = provice.length;
  for (var i = 0; i < len; i++) {
    var provOpt = document.createElement("option");
    provOpt.value = provOpt.innerText = provice[i]["name"];
    prov.appendChild(provOpt);
  }
})();

/*根据所选的省份来显示城市列表*/
function showCity(obj) {
  var val = obj.options[obj.selectedIndex].value;
  if (val !== current.prov) {
    current.prov = val;
    addrShow.value = "";
    btn.disabled = true;
    city.length = 1;
    county.length = 1;
  }

  if (val !== "") {
    //查找省的索引
    var len = provice.length;
    let provIndex = 0;
    for (var i = 0; i < len; i++) {
      if (val == provice[i]["name"]) {
        provIndex = i;
      }
    }

    var cityLen = provice[provIndex]["city"].length;
    for (var j = 0; j < cityLen; j++) {
      var cityOpt = document.createElement("option");
      cityOpt.value = cityOpt.innerText = provice[provIndex]["city"][j].name;
      city.appendChild(cityOpt);
    }
  }
}

/*根据所选的城市来显示县区列表*/
function showCounty(obj) {
  var val = obj.options[obj.selectedIndex].value;
  if (val !== current.city) {
    current.city = val;
    addrShow.value = "";
    btn.disabled = true;
    county.length = 1; //清空之前的内容只留第一个默认选项
  }

  //查找省的索引
  var provLen = provice.length;
  let provIndex = 0;
  for (var i = 0; i < provLen; i++) {
    if (current.prov == provice[i]["name"]) {
      provIndex = i;
      break;
    }
  }

  //查找城市的索引
  var cityLen = provice[provIndex]["city"].length;
  let cityIndex = 0;
  for (var i = 0; i < cityLen; i++) {
    if (current.city == provice[provIndex]["city"][i].name) {
      cityIndex = i;
      break;
    }
  }

  if (val !== "") {
    var countyLen =
      provice[provIndex]["city"][cityIndex].districtAndCounty.length;
    if (countyLen == 0) {
      addrShow.value = current.prov + "-" + current.city;
      return;
    }
    for (var n = 0; n < countyLen; n++) {
      var countyOpt = document.createElement("option");
      countyOpt.innerText =
        provice[provIndex]["city"][cityIndex].districtAndCounty[n];
      countyOpt.value =
        provice[provIndex]["city"][cityIndex].districtAndCounty[n];
      county.appendChild(countyOpt);
    }
  }
}

/*选择县区之后的处理函数*/
function selectCounty(obj) {
  current.county = obj.options[obj.selectedIndex].value;
  if (current.city !== "" && current.county !== "") {
    btn.disabled = false;
  }
}

/*点击确定按钮显示用户所选的地址*/
function showAddr() {
  addrShow.value = current.prov + "-" + current.city + "-" + current.county;
}
