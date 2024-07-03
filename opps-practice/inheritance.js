
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
  draw() {
    console.log('draw');
  }
}

const userOne = new Shape('venkatesh', 'venky@gmail.com', 'venky-oops-concept');

console.log(userOne);