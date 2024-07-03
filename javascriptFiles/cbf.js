const getdos=(resource,cbf)=>{
    
    const request=new XMLHttpRequest();
    
    request.addEventListener('readystatechange',()=>{
       // console.log(request,request.readyState);
        if(request.readyState===4 && request.status===200){
            const data=JSON.parse(request.responseText);
            cbf(undefined,data);
        }
        else if(request.readyState===4){
           cbf('something went wrong',undefined);
        }
    });
    request.open('GET',resource);
    request.send();
    
    };
    getdos('tods.json',(err,data)=>{
        console.log('callback fired');
        console.log(data);
        getdos('cbf.json',(err,data)=>{
            console.log(data);
            getdos('hell.json',(err,data)=>{
                console.log(data);
            })
        })
        
    });