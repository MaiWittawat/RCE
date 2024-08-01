const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { exec, execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const redis = require('redis')

// API
const API_ROUTER = require('./api')

const app = express()
const port = 3000

const setUpRedis = async () => {
    const redisClient = redis.createClient();
    redisClient.on('error', (err) => {
        console.log('Redis Error: ', err);
    });
    return redisClient;
};

app.use(cors())
app.use(bodyParser.json())

app.use(async (req, res, next) =>{
    const redisClient = await setUpRedis()
    req.redisClient = redisClient
    next()
})

app.use('/api', API_ROUTER)

app.get('/hello', (req, res)=>{
    res.send("Hello world")
})


app.listen(port, async ()=>{
    console.log(`Server is running on port ${port}`)
})