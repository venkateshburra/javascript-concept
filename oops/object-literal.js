
// const userOne = {
//   name : 'venkatesh',
//   email : 'venky.com',
//   login() {
//     console.log('login');
//   },
//   logout() {
//     console.log('logout');
//   }
// };

// userOne.username = 'Burra';
// delete userOne.email;
// console.log(userOne);
// console.log(userOne.name);

// fuctory function
// function UserOne1(name, email) {
//   const user = {
//     name : name,
//     email : email,
//     login() {
//       console.log('login');
//     }
//   }
//  return user
// }
// const userObj =  UserOne1('venky', 'venky.com');
// console.log(userObj)
// userObj.login();


// constructor function
// function UserOne(name, email) {
//   this.name = name;
//   this.email = email;
// }

// const userObj = new UserOne('venky', 'venky.com');
// console.log(userObj);

// class

class User {
  constructor(username) {
    this.username = username;
  }
}

const obj =   new User('Venkatesh');
const obj1 = new User('Mahesh');

console.log(obj, obj1);
console.log(obj.username);