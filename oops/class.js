
class Myclass {
  constructor(username, eamil) {
    this.username = username;
    this.email = eamil;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} just logged in`)
    return this;
    // console.log(this.username + ' just logged in');
  }

  logout() {
    console.log(`${this.username} just logged out`)
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }

}

const obj1 = new Myclass('venkatesh', 'venky.com');
const obj2 =  new Myclass('mahesh', 'mahesh.com');

console.log(obj1, obj2);

obj1.login().incScore().incScore().logout();