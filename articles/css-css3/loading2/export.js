const name = 'kingx';

export {_name as name};
export {name}; // 抛出异常，name作为对外输出的变量，只能export一次

export const a = 1;
