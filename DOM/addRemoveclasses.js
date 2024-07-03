// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error')

// content.classList.remove('error')

// content.classList.add('success')

// console.log(content.className);


const content = document.querySelectorAll('p');

content.forEach(para => {
  if(para.textContent.includes('error')) {
    para.classList.add('error');
    // para.setAttribute('class', 'error')
  }

  else if(para.textContent.includes('success')) {
    para.classList.add('success');
  }
})


// content.forEach(p => {
//   // if hide any element inner text not show that hidden element, textContent shows that hidden element
//   console.log(p.textContent);
// })


const title = document.querySelector('.title');

title.classList.toggle('text');
title.classList.toggle('abc');

