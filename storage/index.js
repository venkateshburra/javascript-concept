//store data local storage
// localStorage.setItem('namee', 'venky');
// localStorage.setItem('age', 19);

// //get data from local starage
// let namee = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(namee, age);

//updating data
// localStorage.setItem('namee', 'mahesh');
// namee = localStorage.getItem('namee');
// localStorage.age = '30';

//deleting data from local starage

// namee = localStorage.getItem('namee');
// age = localStorage.getItem('age');
// console.log(namee);

// localStorage.removeItem('namee');
// localStorage.clear();

// namee = localStorage.getItem('namee');
// age = localStorage.getItem('age');

// console.log(namee, age);


const todes = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'venky'},
    {text: 'buy some bread', author: 'navya'}
];

// console.log(JSON.stringify(todes));
localStorage.setItem('todes', JSON.stringify(todes));
const stored = localStorage.getItem('todes');

console.log(JSON.parse(stored));