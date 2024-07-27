function recPromise(){
 
const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
    res(new Date().toLocaleTimeString());
}
,1000);

});

promise.then((result)=>{
    console.log(result);
    recPromise() 
})
}

recPromise();






