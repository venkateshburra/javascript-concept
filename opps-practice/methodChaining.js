class Myclass {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0
  }

  login() {
    console.log(`${this.username} has logged in`);
    return this;
  }

  logout() {
    console.log(`${this.username} has logged out`);
    return this;
  }

  increaseScore() {
    this.score += 1
    console.log(`${this.username} has scored ${this.score}`);
    return this;
  }
}

const userOne = new Myclass('venkatesh', 'burraVenkatesh284@gmail.com');

console.log(userOne);

// userOne.login();
// userOne.logout();
// userOne.increaseScore();

// method chaining // for method chaining we have to return this in methods

userOne.login().increaseScore().increaseScore().logout();