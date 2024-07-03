
function Myfun(username, email) {
  this.username = username;
  this.email = email;
}

Myfun.prototype.login = function() {
  console.log(`${this.username} has logged in`);
  // for chaining methods we have to use this keyword after method complete
  return this;
}

Myfun.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this;
}

const userOne = new Myfun('venkateh', 'venky@gmail.com');
const userTwo = new Myfun('mahesh', 'mahesh@gmail.com');

console.log(userOne);

userOne.login();
userOne.logout();


// method chaining
userTwo.login().logout();