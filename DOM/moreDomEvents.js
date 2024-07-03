// COPY  Event

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('you copied my content');
});

// MOUSEOVER Event

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `X pose -  ${e.offsetX} Y pose - ${e.offsetY}`;
})

// adding addEventListener to document

document.addEventListener('wheel', e => {
  // console.log(e)
  console.log(e.pageX, e.pageY)
});