//****************所使用的数据是city.js******************//
// 1. 获取所有涉及到属性处理的元素
const btn = document.getElementById("confirm");
const addrShow = document.getElementById("addr-show");
const province = document.getElementById("province");
const city = document.getElementById("city");
const county = document.getElementById("county");

// 2. 添加一个全局变量，用于保存当前所选的省市区
const current = {
  province: "",
  city: "",
  county: "",
};

/**
 * 3. 自动加载省份列表
 *  - 手动添加option标签，设置value和innerText属性
 *  - 创建的option标签，append至province元素中
 */
(function showProvince() {
  btn.disabled = true;
  const len = provinceData.length;
  for (let i = 0; i < len; i++) {
    const provinceOpt = document.createElement("option");
    provinceOpt.value = provinceOpt.innerText = provinceData[i]["name"];
    province.appendChild(provinceOpt);
  }
})();

/**
 * 4. 根据所选的省份来显示城市列表
 *  - 获取选中的的省份
 *  - 如果选中的省份与当前已经选中的省份不一样
 *    -
 */
function showCity(obj) {
  console.log("province obj:", obj);
  console.log(obj.options);
  console.log(obj.selectedIndex);
  const val = obj.options[obj.selectedIndex].value;
  if (val !== current.province) {
    current.province = val;
    addrShow.value = "";
    btn.disabled = true;
    city.length = 1;
    county.length = 1;
  }

  if (val !== "") {
    //查找省的索引
    const len = provinceData.length;
    let provinceIndex = 0;
    for (let i = 0; i < len; i++) {
      if (val == provinceData[i]["name"]) {
        provinceIndex = i;
      }
    }

    const cityLen = provinceData[provinceIndex]["city"].length;
    for (let j = 0; j < cityLen; j++) {
      const cityOpt = document.createElement("option");
      cityOpt.value = cityOpt.innerText =
        provinceData[provinceIndex]["city"][j].name;
      city.appendChild(cityOpt);
    }
  }
}

/*根据所选的城市来显示县区列表*/
/**
 *
 * @param {*} obj
 * @returns
 */
function showCounty(obj) {
  const val = obj.options[obj.selectedIndex].value;
  if (val !== current.city) {
    current.city = val;
    addrShow.value = "";
    btn.disabled = true;
    county.length = 1; //清空之前的内容只留第一个默认选项
  }

  //查找省的索引
  const provinceLen = provinceData.length;
  let provinceIndex = 0;
  for (let i = 0; i < provinceLen; i++) {
    if (current.province == provinceData[i]["name"]) {
      provinceIndex = i;
      break;
    }
  }

  //查找城市的索引
  const cityLen = provinceData[provinceIndex]["city"].length;
  let cityIndex = 0;
  for (let i = 0; i < cityLen; i++) {
    if (current.city == provinceData[provinceIndex]["city"][i].name) {
      cityIndex = i;
      break;
    }
  }

  if (val !== "") {
    const countyLen =
      provinceData[provinceIndex]["city"][cityIndex].districtAndCounty.length;
    if (countyLen == 0) {
      addrShow.value = current.province + "-" + current.city;
      return;
    }
    for (let n = 0; n < countyLen; n++) {
      const countyOpt = document.createElement("option");
      countyOpt.innerText =
        provinceData[provinceIndex]["city"][cityIndex].districtAndCounty[n];
      countyOpt.value =
        provinceData[provinceIndex]["city"][cityIndex].districtAndCounty[n];
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
  addrShow.value = current.province + "-" + current.city + "-" + current.county;
}
