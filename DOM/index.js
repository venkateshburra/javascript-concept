// const para = document.querySelector('p')

// console.log(para);

// const para = document.querySelector('div')

// console.log(para);

// const para = document.querySelector('.error')

// console.log(para);

// const para = document.querySelectorAll('.error')

// console.log(para);


// const para = document.querySelector('div.error')

// console.log(para);

// const para = document.querySelectorAll('p')

// console.log(para);

// const para = document.querySelectorAll('p')

// para.forEach(paras => {
//   console.log(paras);
// })
// console.log(para);



// const para =document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para);
// })

// console.log(paras[2]);

// const errors = document.querySelectorAll('.error');

// console.log(errors);


//  Get  an element by ID

const title = document.getElementById('page-title');

console.log(title);

// Get element by their class name
      //  we cannot use forEach method in HTMLCollections

const errors = document.getElementsByClassName('error');

console.log(errors);

//  Get element by their tag name

const tagName = document.getElementsByTagName('p');

console.log(tagName);
console.log(tagName[1]);