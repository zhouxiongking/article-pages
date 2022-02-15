var name = 'in window'
var obj = {
    name: "in obj",
    getName: function() { return this.name }
}
console.log(obj.getName());
console.log((obj.getName)());
console.log((obj.getName = obj.getName)());