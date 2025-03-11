
fs.readFile("./test.txt","utf-8",(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
})