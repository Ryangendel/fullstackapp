const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

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
    res.send(data)
})

app.listen(PORT)