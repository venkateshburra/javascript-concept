const para = document.querySelector('p');

para.innerText =  'Venky is awesome';

console.log(para); 

const paras = document.querySelectorAll('p');

// paras.forEach(para => {

//   console.log(para.innerText); 
//   para.innerText += ' New text';

// })

const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML += '<h2>THIS IS A AN H2 </h2>'
 
// console.log(content.innerHTML);


const people = ['venky', 'mahesh', 'navya'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
  // content.innerHTML += '<p>' + person + '</p>';
})

// content.innerHTML += '<p>hello</p>'