
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feeback = document.querySelector('.feeback');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.username.value;
  const userPattern = /^[a-zA-Z]{6,12}$/;

  if(userPattern.test(username)) {
    feeback.textContent = 'that user name is valid';
  } else {
    feeback.textContent = 'username must contain letters only and be between 6 to 12 characters';
  }

})


form.username.addEventListener('keyup', e => {
  if(userPattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
})