// const people = ['venky', 'mahesh', 'venky', 'sahul'];
// console.log(people);

// // const nameSet = new Set(['venky', 'mahesh', 'venky', 'sahul']);
// const nameSet = new Set(people);
// console.log(nameSet);

// // spreading into new array
// const uniqueNames = [...nameSet];
// console.log(uniqueNames);

// or

const people = ['venky', 'mahesh', 'venky', 'sahul'];
console.log(people);

// // const nameSet = new Set(['venky', 'mahesh', 'venky', 'sahul']);
// const nameSet = new Set(people);
// console.log(nameSet);

// spreading into new array
const uniqueNames = [...new Set(people)];
console.log(uniqueNames);

// set have properties and chainable

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log(ages.size);
console.log(ages.has(30), ages.has(25));
ages.clear();
console.log(ages);

// set use forEach method
const venkys = new Set([
  { name : 'venky', age : 20},
  { name : 'mahesh', age : 25},
  { name : 'navya', age : 22},
]);

venkys.forEach(venky => {
  console.log(venky.name, venky.age);
})