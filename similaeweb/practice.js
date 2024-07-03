const menu = document.querySelector('.menu_image');

const parent = document.querySelector('.parent_div');

menu.addEventListener('click', () => {
  parent.classList.toggle('expand');
  if (menu.src.endsWith('/similaeweb/menu.svg')) {    //  if (menu.src.startsWith(window.location.origin + '/menu.svg'))
     menu.src = 'IntoMark.png';
  } else {
    menu.src = '/similaeweb/menu.svg';
  }
})


const li = document.querySelector('.first_li');

const products = document.querySelector('.gallary_section');


const li2 = document.querySelector('.second_li');

const costemer = document.querySelector('.custormers_section');

const li3 = document.querySelector('.third_li');

const data = document.querySelector('.info');

const li4 = document.querySelector('.fourth_li');

const prices = document.querySelector('.main_div');

const li5 = document.querySelector('.fifth_div');

const resources = document.querySelector('.venky');

const btn = document.querySelector('.btn3');

const forms = document.querySelector('.form_input')

li.addEventListener('click', () => {
  products.style.display = 'block';
  li.style.color = 'red';
  costemer.style.display = 'none';
  li2.style.color = '';
  data.style.display = 'none';
  li3.style.color = '';
  prices.style.display = 'none';
  li4.style.color = '';
  resources.style.display = 'none';
  li5.style.color = '';
  forms.style.display = 'none';
  btn.style.color = '';
})


li2.addEventListener('click', () => {
  costemer.style.display = 'block';
  li2.style.color = 'red';
  products.style.display = 'none';
  li.style.color = '';
  data.style.display = 'none';
  li3.style.color = '';
  prices.style.display = 'none';
  li4.style.color = '';
  resources.style.display = 'none';
  li5.style.color = '';
  forms.style.display = 'none';
  btn.style.color = '';
})


li3.addEventListener('click', () => {
  data.style.display = 'block';
  li3.style.color = 'red';
  products.style.display = 'none';
  li.style.color = '';
  costemer.style.display = 'none';
  li2.style.color = '';
  prices.style.display = 'none';
  li4.style.color = '';
  resources.style.display = 'none';
  li5.style.color = '';
  forms.style.display = 'none';
  btn.style.color = '';
})


li4.addEventListener('click', () => {
  prices.style.display = 'grid';
  li4.style.color = 'red';
  products.style.display = 'none';
  li.style.color = '';
  costemer.style.display = 'none';
  li2.style.color = '';
  data.style.display = 'none';
  li3.style.color = '';
  resources.style.display = 'none';
  li5.style.color = '';
  forms.style.display = 'none';
  btn.style.color = '';
})


li5.addEventListener('click', () => {
  resources.style.display = 'block';
  li5.style.color = 'red';
  products.style.display = 'none';
  li.style.color = '';
  costemer.style.display = 'none';
  li2.style.color = '';
  data.style.display = 'none';
  li3.style.color = '';
  prices.style.display = 'none';
  li4.style.color = '';
  forms.style.display = 'none';
  btn.style.color = '';
})

btn.addEventListener('click', () => {
  forms.style.display = 'block';
  btn.style.color = 'red';
  products.style.display = 'none';
  li.style.color = '';
  costemer.style.display = 'none';
  li2.style.color = '';
  data.style.display = 'none';
  li3.style.color = '';
  prices.style.display = 'none';
  li4.style.color = '';
  resources.style.display = 'none';
  li5.style.color = '';
})



// const sections = [
//   { li: document.querySelector('.first_li'), section: document.querySelector('.gallary_section') },
//   { li: document.querySelector('.second_li'), section: document.querySelector('.custormers_section') },
//   { li: document.querySelector('.third_li'), section: document.querySelector('.info') },
//   { li: document.querySelector('.fourth_li'), section: document.querySelector('.main_div') },
//   { li: document.querySelector('.fifth_div'), section: document.querySelector('.venky') }
// ];

// function handleItemClick(clickedItem, clickedSection) {
//   sections.forEach(section => {
//     section.section.style.display = section.li === clickedItem ? 'block' : 'none';
//     section.li.style.color = section.li === clickedItem ? 'red' : '';
//   });
// }

// sections.forEach(({ li, section }) => {
//   li.addEventListener('click', () => {
//     handleItemClick(li, section);
//   });
// });



// const lis = document.querySelectorAll('.list li');

// lis.forEach(li => {
//   li.addEventListener('click', () => {
//     const sectionClass = li.dataset.section; // Retrieve the corresponding section class from the data attribute
//     const section = document.querySelector(sectionClass); // Find the corresponding section element

//     // Hide all sections and reset colors
//     document.querySelectorAll('.section').forEach(s => {
//       s.style.display = 'none';
//     });
//     lis.forEach(l => {
//       l.style.color = '';
//     });

//     // Display the clicked section and change its color
//     section.style.display = 'block';
//     li.style.color = 'red';
//   });
// });


