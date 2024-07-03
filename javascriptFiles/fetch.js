fetch('tods.json')
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(data=>{
    new promise
    console.log('something went wrong');
})