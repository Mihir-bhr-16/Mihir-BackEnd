require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const json = {
"employee":{"name":"John", "age":30, "city":"New York"}
}
app.get('/',(req,res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Hi')
})
app.get('/github',(req,res)=>{
    res.json(json)
})
app.get('/login',(req,res)=>{
    res.send('<h1> Enter ypur login details')
})
app.listen(process.env.PORT,() =>{
    console.log(`Example App listening on port ${port}`)
})