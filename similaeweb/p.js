// const para = document.querySelector('.box');
// const child = document.querySelector('p');
// const a = document.querySelector('a');
// console.log(para.children);

// console.log(child.parentElement)
// console.log(child.nextElementSibling)

// child.classList.add('first-para')
// console.log(child.className)
// a.setAttribute('href', 'venky');
// console.log(a.getAttribute('href'));

// child.style.color = 'red';
// // para.forEach(p => {
// //   console.log(p.innerText);
// //   p.innerHTML += ' <h2>mahesh</h1>'
// // })
// // console.log(para);

// // para.innerText = ' venky'

// // para.innerHTML = '<h1>venky</h1>'




const btn1 = document.querySelector('.btn1');

const btn2 = document.querySelector('.btn2');

const btn3 = document.querySelector('.btn3');

const box1 = document.querySelector('.box1');

const box2 = document.querySelector('.box2');

const box3 = document.querySelector('.box3');

btn1.addEventListener('click', () => {
  box1.style.opacity = 1;
  btn1.style.display = 'none';
  btn2.style.display = 'none';
  btn3.style.display = 'none';
});

btn2.addEventListener('click', () => {
  box2.style.opacity = 1;
  box1.style.display = 'none';
  btn1.style.display = 'none';
  btn2.style.display = 'none';
  btn3.style.display = 'none';
});

btn3.addEventListener('click', () => {
  box3.style.opacity = 1;
  box1.style.display = 'none';
  box2.style.display = 'none';
  btn1.style.display = 'none';
  btn2.style.display = 'none';
  btn3.style.display = 'none';
});