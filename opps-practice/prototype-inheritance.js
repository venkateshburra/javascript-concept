
function Circle(username, email) {
  this.username = username;
  this.email = email;
}

Circle.prototype.login = function() {
  console.log(`${this.username} has logged in`);
}

Circle.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
}

function Shape(username, email, title) {
  Circle.call(this, username, email)
  this.title = title;
}

Shape.prototype = Object.create(Circle.prototype);

Shape.prototype.age  = 10;
Shape.prototype.draw = function() {
  console.log('draw');
};

const userOne = new Circle('venkateh', 'venky@gmail.com');
const userTwo = new Shape('mahesh', 'mahesh@gmail.com', 'venky-js-course');

console.log(userOne);
console.log(userTwo);