class Myclass{
  constructor(radius, name) {
    this.radius = radius
    this.name = name;
    // console.log(radius);
    this.newmethod = function() {
      console.log('new method is created')
    }
  }
  walk(){
    console.log('he walked');
  }

  myName() {
    console.log(this.name);
  }
}

const obj1 = new Myclass(4, 'venky');

const obj2 = new Myclass(8, 'mahesh');

console.log(obj1);
console.log(obj2);

console.log(obj1.radius)
obj1.myName();
obj1.walk();
obj1.newmethod();