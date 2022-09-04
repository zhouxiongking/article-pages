const loaderUtils = require("loader-utils");

// 自定义loader-替换文件中hello为传入的值
function replaceLoader(source) {
  // 假如需要从loader的配置中接收参数
  // 可以使用loader-utils来获取
  const options = loaderUtils.getOptions(this);
  return source.replace("hello", options.name);
}

// 自定义loader-sass-loader
const sass = require("node-sass");
function sassLoader(source) {
  const options = loaderUtils.getOptions(this);
  const sassOptions = options.sassOptions || {};
  const result = sass.renderSync({
    data: source,
    ...sassOptions,
  });
  return result.css;
}
