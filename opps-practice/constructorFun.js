
function Myfun(radius, name) {
  this.radius = radius;
  this.name = name;
  this.walk = function() {
    console.log('he walked');
  }
}

Myfun.prototype.draw = function() {
  console.log('draw');
}

Myfun.prototype.age = 10;

const obj1 = new Myfun(4, 'venky');

console.log(obj1);
obj1.walk();