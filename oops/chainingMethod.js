class User {
  constructor(username, eamil) {
    this.username = username;
    this.eamil = eamil;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} has just logged in`);
    return this;
  }

  logout() {
    console.log(`${this.username} has just logged Out`);
    return this;
    // console.log(this.username, 'has just logged in')
  }

  increaseScore() {
    this.score += 1;
    console.log(`${this.username} has scored ${this.score}`);
    return this;
  }
}


const userOne = new User('venky', 'venky.com');
const userTwo= new User('mahesh', 'mahesh.com');

// console.log(userOne, userTwo);
// userOne.login();
// userTwo.login();

// userOne.logout();

// method chaing to use return this

userOne.login().increaseScore().increaseScore().logout();


