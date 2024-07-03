const myfun = (dataa) => {

    
const request=new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
   // console.log(request,request.readyState);
    if(request.readyState===4){
        const data = JSON.parse(request.responseText)
        console.log(data)
    }
    else if(request.readyState===4){
       console.log('could not fetch data');
    }
})
request.open('GET',dataa);
request.send();

}

myfun("cbf.json");
myfun("cbf.json");
