fetch('tods.json')
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(data=>{
    console.log('something went wrong');
})
