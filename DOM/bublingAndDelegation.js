
const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {

  // ul.innerHTML += '<li>something New</li>';

            // OR
  const li = document.createElement('li');
  li.textContent = 'something New';
  // ul.append(li); //adds element in botttom
  ul.prepend(li);//adds element on top

});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', (e) => {    

//   console.log('events in LI');
//   e.stopPropagation();
//     // e.target.style.textDecoration = 'line-through';
//     e.target.remove();
//   });
// });

ul.addEventListener('click', e => {
  // console.log('events in UL');
  // console.log(e.target);
  if(e.target.tagName === 'LI') {
    e.target.remove();
  }
})