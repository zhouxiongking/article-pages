// https://github.com/sisterAn/blog/issues/21
const p = Promise.resolve();
(async () => {
  await p;
  console.log("await end");
})();
p.then(() => {
  console.log("then 1");
}).then(() => {
  console.log("then 2");
});
