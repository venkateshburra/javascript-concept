const getdos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }
        else {
          reject('Request failed with status');
        }
      
    });

    request.open('GET', resource);
    request.send();
  });
};

getdos("cbf.json")

// // Using Promises with callbacks
// getdos('tods.json')
//   .then((data) => {
//     console.log('Data from tods.json:', data);
//     return getdos('cbf.json');
//   })
//   .then((data) => {
//     console.log('Data from cbf.json:', data);
//     return getdos('hell.json');
//   })
//   .then((data) => {
//     console.log('Data from hell.json:', data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // Using async/await with the same Promises
// const fetchData = async () => {
//   try {
//     const data1 = await getdos('tods.json');
//     console.log('Data from tods.json:', data1);

//     const data2 = await getdos('cbf.json');
//     console.log('Data from cbf.json:', data2);

//     const data3 = await getdos('hell.json');
//     console.log('Data from hell.json:', data3);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();
