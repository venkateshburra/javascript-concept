// FINDOUT CHILDRENS
const article = document.querySelector('article');

console.log(article.children);

console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
})

// FINDOUT PARENTS 

const title = document.querySelector('h2');
  
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
// console.log(title.parentNode);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling)

console.log(title.nextElementSibling.parentElement.children);

