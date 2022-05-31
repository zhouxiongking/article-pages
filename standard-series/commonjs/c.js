const b = require("./b");

console.log(b());

require(["jquery", "a", "b", "c"], function ($, ma, mb, mc) {
  ma.a();
  mb.a();
  mc.a();
});
