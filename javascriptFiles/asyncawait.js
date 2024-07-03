
const todsfun=async(link)=>{

    try{
        const response = await fetch(link);
        const data=await response.json();
        return data;
    }
    catch(err){
        console.log("something went wrong");
        throw err;
    }

}

todsfun('/JsonFiles/cbf.json')
.then(data=>console.log(data))

todsfun('/JsonFiles/hell.json')
.then((data) => console.log(data))
.catch(err=>console.log(err))