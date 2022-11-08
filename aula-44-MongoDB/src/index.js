require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://phteste:phteste1@cluster0.e3m14ig.mongodb.net/?retryWrites=true&w=majority')
const modelUser = require('./models/user')

app.use(express.json())


app.post('/usuarios', async (req,res)=> {
    user = new modelUser(req.body)
    const result = await user.save()
    res.send(result)
})



app.listen(PORT, ()=> {
 console.log(`listening on port: ${PORT}`);
})