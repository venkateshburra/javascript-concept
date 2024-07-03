const getTodos = (resource, callBack) => {

  request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4  && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callBack(undefined, data);
    }
    else if(request.readyState === 4) {
      callBack('could not fetch the data', undefined);
    }
  });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('GET', resource);
    request.send();

}


getTodos('todos.json',(err, data) => {
      console.log(data);
      getTodos('todos2.json', (err, data) => {
        console.log(data);     
      getTodos('todos3.json', (err, data) => {
        console.log(data)
     }) 
  })
});