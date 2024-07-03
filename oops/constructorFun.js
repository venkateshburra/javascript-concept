
function User(username, eamil) {
  this.username = username;
  this.eamil = eamil;
  this.login = function() {
    console.log(`${this.username} has logged in`);
    // console.log(this.username, 'has logged in');
  }

}

const userOne = new User('venkatesh', 'burraVenkatesh284@gmail.com');
const userTwo = new User('mahesh', 'maheshBurraRko@gmail.com');

console.log(userOne);
userOne.login();

console.log(userTwo);
userTwo.login();

console.log(userOne.username);
console.log(userTwo.username);


