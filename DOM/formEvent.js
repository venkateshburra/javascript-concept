
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(form.username.value);
})


// regular expression

const username = 'aaaaaa';

const pattern = /^[a-z1-9]{6,}$/;

// testing
const result = pattern.test(username);

console.log(result);