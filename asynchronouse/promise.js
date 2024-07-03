// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve('some data');
//     reject('something error');
//   });
// }

// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// promise 

const gettodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if(request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open('GET', resource);

    request.send();
  });
}
gettodos('todos.json').then(data => {
  console.log('promise resolved1 :', data);
  return gettodos('todos2.json')
}).then(data => {
  console.log('promise resolved2 :', data);
  return gettodos('todos.json')
}).then(data => {
  console.log('promise resolved3 :', data);
}).catch(err => {
  console.log('promise rejected :', err);
});

// gettodos('todos2.json').then(data => {
//   console.log('promise resolved :', data);
// }).catch(err => {
//   console.log('promise rejected :', err);
// });

