
function User(username, eamil) {
  this.username = username;
  this.eamil = eamil;
}

User.prototype.login = function() {
  console.log(`${this.username} has logged in`);
  return this;
}

User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this;
}

const userOne = new User('venkatesh', 'burraVenkatesh284@gmail.com');
const userTwo = new User('mahesh', 'maheshBurraRko@gmail.com');

console.log(userOne);
userOne.login().logout()

