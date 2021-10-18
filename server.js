const express = require("express")
const app = express()
const PORT = prosses.env.PORT || 3000

app.get("/", (req, res)=>{
    res.send("helllo")
})

app.listen(PORT)