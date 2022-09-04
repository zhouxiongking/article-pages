const fs = require("fs");

// 自定义插件-每次构建后的版本保存到一个特定的文件
class VersionPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("Version Plugin", (compilation, next) => {
      const outputPath = compiler.path || compilation.options.output.path;
      const versionFile = `${outputPath}/version.json`;
      const content = `{"version": ${version}}`;
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }
      fs.writeFileSync(versionFile, content);
      next();
    });
  }
}

// 自定义插件-移除webpack注释
class ClearAnnotationPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("ClearAnnotationPlugin", (compilation) => {
      // compilation: 此次打包的上下文
      for (const name in compilation.assets) {
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          const withoutContents = contents.replace(/\/\*\*+\*\//g, "");
          compilation.assets[name] = {
            // 内容覆盖
            source: () => withoutContents,
            // 必须返回
            size: () => withoutContents.length,
          };
        }
      }
    });
  }
}

// 自定义插件-统计build生成的文件数量，以及每个文件的大小
class FileStatisticPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("FileStatisticPlugin", (compilation, next) => {
      const fileList = compilation.assets;
      const fileLength = Object.keys(fileList).length;
      let content = `本次构建结果统计：生成的文件数量：${fileLength}个\r\n`;
      if (this.options.author) {
        content += `执行者：${this.options.author} \r\n`;
      }
      for (const name in fileList) {
        content += `文件名称：${name}，文件大小：${fileList[name].size()} \r\n`;
      }
      compilation.assets["file.txt"] = {
        source: () => content,
        size: () => content.length,
      };
    });
  }
}

module.exports = VersionPlugin;
