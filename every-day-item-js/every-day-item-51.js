// https://www.wenjiangs.com/doc/filternonunique
// 过滤掉数组中的非唯一值
// https://blog.csdn.net/p15097962069/article/details/106210775
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));