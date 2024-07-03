const todos = async () => {

  const response = await fetch('todos.json');
  if(response.status !== 200) {
    throw new Error('coud not fetch the data');
  }
  const data = await response.json();
  return data;
}


todos()
  .then(data => {console.log(data)})
  .catch(err => {console.log('rejected:', err.message)})


// const todos = async (resource) => {

//   const response = await fetch(resource);
//   const data = await response.json();
//   console.log(data);
// }


// todos('todos.json');
