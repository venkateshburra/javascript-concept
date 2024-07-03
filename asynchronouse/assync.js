
// const todo = async (resource) => {
//   const response = await fetch(resource);
//   const data = await response.json();
//   return data;
// }

// todo('https://jsonplaceholder.typicode.com/todos/')
//     .then((data) => {
//       console.log(data);
//       return todo('asynchronouse/todos.json');
//     }).then((data) => {
//       console.log(data);
//     }).catch((err) => {
//       console.log('could not fetch the data', err)
//     })



const todo = async (resource) => {
  const response = await fetch(resource);
  const data = await response.json();
  console.log(data);
}

(async () => {
   todo('https://jsonplaceholder.typicode.com/todos/');
   todo('asynchronouse/todos.json');
})();
