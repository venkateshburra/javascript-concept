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

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userOne = new User('venky', 'venky.com');
const userTwo= new User('mahesh', 'mahesh.com');
const userThree = new Admin('sahul', 'sahul.com');

console.log(userOne, userTwo, userThree);
// userThree.increaseScore();

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users)



// userOne.login().increaseScore().increaseScore().logout();


