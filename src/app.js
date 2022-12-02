const express = require("express")

const app = express()

app.get("/" , (req , res)=>{
    res.send("waw this is server")
})

app.listen(process.env.PORT | 5556 , ()=> {
    console.log("server listening on")
})