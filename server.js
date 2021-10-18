const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

//mongodb+srv://admin:password@cluster0.lc6in.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const data = [
    {
        id:1,
        name:"Ryan"
    },
    {
        id:2,
        name:"Nick"
    },
    {
        id:3,
        name:"Fred"
    }
]

app.get("/", (req, res)=>{
    res.json(data)
})

app.listen(PORT)