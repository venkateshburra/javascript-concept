const getdos=(resource)=>{

    return new Promise((resolve,reject)=>{  
     const request=new XMLHttpRequest(); 
 
     request.addEventListener('readystatechange',()=>{
         if(request.readyState===4 && request.status===200){
             const data=JSON.parse(request.responseText);
             resolve(data);
         }
         else if(request.readyState===4){
            reject('something went wrong');
         }
     });
     request.open('GET',resource);
     request.send();
    })
     
     };
 
         getdos('tods.json').then(data=>{
             console.log(data);
             return getdos('cbf.json');
         }).then(data=>{
             console.log(data);
             return getdos('hell.json');
         }).then(data=>{
             console.log(data);
         }).catch(err=>{
             console.log(err);
         }).finally(data=>{
             console.log('promises completed successfully')
         })