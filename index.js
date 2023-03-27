const express = require ("express")
const fs = require("fs")
const app = express();

let Time = new Date();
let TimeStamps="Current Timing :"+Time.toUTCString()



app.get("/time",(req,res)=>{
    fs.writeFile("./TimeStamps/current date-time.txt",TimeStamps,(err)=>{
        if(err){
            console.log(err)
            res.send("Error  :   "+err)
    }
    else{
        res.send("File Created succesfully")
    } 
    })
    
})
    app.listen(5000)