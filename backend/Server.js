const express=require("express")
const db=require('./config/db')
const cors=require('cors')
const router = require("./authRoute/authRoute")

const app=express()

app.use(express.json())
app.use(cors())

app.use('/',router)


app.listen(6789,()=>{
    console.log('server listen')
})