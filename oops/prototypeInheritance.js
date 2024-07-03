
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

function Admin(username, eamil, title) {
  // inherit properties from parent
  User.call(this, username, eamil);
  this.title = title;
}

// inherit methods from parant
Admin.prototype = Object.create(User.prototype);
Admin.prototype.delete =  function() {
  console.log('deleted method')
}

const userOne = new User('venkatesh', 'burraVenkatesh284@gmail.com');
const userTwo = new User('mahesh', 'maheshBurraRko@gmail.com');
const userThree = new Admin('sahul', 'sahul!23@gmail.com', 'sahul-belt-cource');

console.log(userOne, userTwo, userThree);
userOne.login().logout()

