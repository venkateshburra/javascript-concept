class fun1 {
    draw() {
      console.log('draw');
    }
}

class fun2 extends fun1 {
  draw(){
    // super.draw(); if we want to call parent method to use super.methodName()
    console.log('drawing')
  }
}

const obj1 = new fun2();
obj1.draw();