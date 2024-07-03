// rest parameter
// rest parameter is allows us to bundle up the arguments inside 
// a function to single array parameter

const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6,7,8,9,10);
console.log(result);


// spread syntac (arrays)
// we use spread syntax to spread out an array into its individual components

const people = ['venky', 'mahesh', 'sahul'];
console.log(...people);
const members = ['sohel', 'tharun', ...people];
console.log(members);

// spread syntax (objects)

const person = { name : 'venky', age : 20, location : 'hyd'};
const personClone = {...person, course : 'bsc(MpCs)'};
console.log(personClone);