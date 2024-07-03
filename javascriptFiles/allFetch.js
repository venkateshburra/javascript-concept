const fetchDataCallback = (resource, callback) => {
    fetch(resource)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        callback(null, data);
      })
      .catch((error) => {
        callback(error, null);
      });
  };
  
  // Using callback with Promises
  fetchDataCallback('tods.json', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Data from tods.json:', data);
      fetchDataCallback('cbf.json', (error, data) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Data from cbf.json:', data);
          fetchDataCallback('hell.json', (error, data) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Data from hell.json:', data);
            }
          });
        }
      });
    }
  });
  
  // Using async/await with fetch
  const fetchDataAsync = async (resource) => {
    try {
      const response = await fetch(resource);
  
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const fetchAllDataAsync = async () => {
    try {
      const data1 = await fetchDataAsync('tods.json');
      console.log('Data from tods.json:', data1);
  
      const data2 = await fetchDataAsync('cbf.json');
      console.log('Data from cbf.json:', data2);
  
      const data3 = await fetchDataAsync('hell.json');
      console.log('Data from hell.json:', data3);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchAllDataAsync();
  