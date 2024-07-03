const todos = (callBack) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      callBack(undefined, request.responseText);
    } else if(request.readyState === 4) {
        // console.log('could not fetch the data');
        callBack('could not fetch the data', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');

  request.send();

}

todos((err, data) => {
  console.log('fired');
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});