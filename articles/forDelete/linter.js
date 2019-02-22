/**
 * Created by zhouxiong on 2018/12/6.
 * jekins使用eslint进行代码检测
 */

const {execSync, spawnSync} = require('child_process');
const {writeFileSync} = require('fs');
const path = require('path');

const LINT_BIN = path.resolve(__dirname, './node_modules/.bin/linter');
const CONFIG_PATH = path.resolve(__dirname, './.lintrc');

let notify = '';

// 获取有变动的文件
let files = getDiffFiles();

if(!files.length) {
    quit();
}

// 过滤lib和dist下的文件
let lintFiles = files.filter(file =>
    !isLibFiles(file.subpath) && !isDistFiles(file.subpath) &&  ~['a', 'm', 'c', 'r'].indexOf(file.status)
).map(file => file.path);

if(!lintFiles.length) {
    quit();
}

let argv = [];
argv = argv.concat(lintFiles, ['-c', CONFIG_PATH]);

let lintResult = spawnSync(LINT_BIN, argv, {stdio: 'inherit'});
console.log(lintResult.stdout.toString());

/**
 * 获取所有变动的文件,包括增(A)删(D)改(M)重命名(R)复制(C)等
 * @param [type] {string} - 文件变动类型
 * @returns {Array}
 */
function getDiffFiles(type) {
    let DIFF_COMMAND = 'git diff --cached --name-status HEAD';
    let root = process.cwd();
    let files = execSync(DIFF_COMMAND).toString().split('\n');
    let result = [];
    type = type || 'admrc';
    let types = type.split('').map((item) => item.toLowerCase());
    files.forEach((file) => {
        if(!file) {
            return;
        }
        let temp = file.split(/[\n\t]/);
        let status = temp[0].toLowerCase();
        let filePath = root + '/' + temp[1];
        let extName = path.extname(filePath).slice(1);
        if(types.length && ~types.indexOf(status)) {
            result.push({
                // 文件变更状态-AMDRC
                status: status,
                // 文件绝对路径
                path: filePath,
                // 文件相对路径
                subpath: temp[1],
                // 文件后缀名
                extName: extName
            });
        }
    });
    return result;
}

/**
 * 是否是lib目录下的文件
 */
function isLibFiles(subpath) {
    return subpath.match(/^src\/lib\/.*/i);
}
/**
 * 是否是dist目录下的文件
 */
function isDistFiles(subpath) {
    return subpath.match(/^dist\/.*/i);
}

/**
 * 退出
 * @param errorCode
 */
function quit(errorCode) {
    if (errorCode) {
        console.log('Commit aborted.');
    }
    process.exit(errorCode || 0);
}