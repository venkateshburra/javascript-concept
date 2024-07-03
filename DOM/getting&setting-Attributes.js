const link = document.querySelector('a');

console.log(link.getAttribute('href'));

// console.log(link);

link.setAttribute('href', 'venky.com');

console.log(link.getAttribute('href'));

link.innerText = 'venky link';


const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success');

console.log(msg.getAttribute('class'));

