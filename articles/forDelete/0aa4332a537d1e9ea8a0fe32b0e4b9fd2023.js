
/*eslint-disable*/

const {execSync, spawnSync} = require('child_process');
const {writeFileSync} = require('fs');
const {resolve} = require('path');

const registry = ' --registry=http://r.npm.sankuai.com';
const notifyFilePath = resolve(__dirname, 'notify.log');

if (!commandIsExists('xg')) {
    console.log('Install xg!');
    execSync('npm install -g xg' + registry);
}
if (!commandIsExists('eslint')) {
    console.log('Install ESLint!');
    execSync('npm install -g eslint eslint-plugin-xg-ng' + registry);
}

let notify = '';

let lintResult = spawnSync('npm', ['run', 'build-lint']);
let lintStdout = lintResult.stdout.toString().split('\n').filter(line => line.trim()).slice(2).join('\n');
if (lintResult.status !== 0) {
    notify += '存在同名controller/service/directive，请检查!\n';
    notify += lintStdout;
}

let freepackResult = spawnSync('xg', ['freepack', 'test', '--module-coverage']);

notify += notify ? '\n' : '';
if (freepackResult.status !== 0) {
    notify += 'freepack coverage 命令执行错误，请检查！\n';
    notify += freepackResult.toString();
} else {
    let lines = freepackResult.stdout.toString().split('\n');
    let uncoverLine = lines.findIndex(line => line.indexOf('Uncover files') !== -1);
    if (uncoverLine !== -1) {
        notify += '下列文件没有被freepack配置文件覆盖，请检查!\n';
        notify += lines.slice(uncoverLine).join('\n');
    }
}
if (notify) {
    notify += getLatestGitlog();
}

writeFileSync(notifyFilePath, notify, 'utf8');
if (notify) {
    console.log('详细错误信息如下：');
    console.log(notify);
    process.exit(1);
}

function getLatestGitlog() {
    return '最近一次提交记录：\n' + execSync('git log -1 --pretty=short').toString();
}

function commandIsExists(commandName) {
    try {
        let stdout = execSync('command -v ' + commandName + ' 2>/dev/null' + ' && { echo >&1 ' + commandName + '; exit 0; }');
        return !!stdout;
    } catch (err) {
        return false;
    }
}


