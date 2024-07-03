
class Circle {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

 login() {
  console.log(`${this.username} has logged in with this email ${this.email}`);
 }

 logout() {
  console.log(`${this.username} has logged out with this email ${this.email}`);
 }
}

class Shape extends Circle {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  draw() {
    console.log('draw');
  }
}

const userOne = new Circle('venkatesh', 'venky@gmail.com');
const userTwo= new Shape('mahesh', 'mahesh@gmail.com', 'venky-oops-concept');


console.log(userOne);
console.log(userTwo);
