const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('you clicked me');
})

button.addEventListener('click', function() {
  console.log('you clicked me');
})

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log('you clicked me');
    console.log(e); 
    console.log(e.target);
    
    // ALSO USE THIS
    
    console.log(item);
    item.style.textDecoration = 'line-through';
    e.target.style.textDecoration = 'line-through';
  })
})

