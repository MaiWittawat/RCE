const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { exec, execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// API
const API_ROUTER = require('./api')

const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())


app.post('/compile', (req, res)=>{
    const {code, language} = req.body
    const fileExtension = {
        python: 'py',
        c: 'c',
        'c++': 'cpp'
    }[language]

    const directory = path.join(__dirname, 'code')
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    const fileName = path.join(directory, `code.${fileExtension}`)
    fs.writeFileSync(fileName, code)

    const compileCommands = {
        python: `python3 ${fileName}`,
        c: `gcc ${fileName} -o ${directory}/code.out && ${directory}/code.out `,
        'c++': `g++ ${fileName} -o ${directory}/code.out && ${directory}/code.out`
    }

    try{
        const execCommand = `${compileCommands[language]}`
        const execResult = execSync(execCommand, {encoding: 'utf8'})
        console.log(execCommand)
        console.log(execResult)
        res.send(execResult.toString())

    }catch(err){
        console.error(`error try catch : ${err}`)
    }

})


app.get('/hello', (req, res)=>{
    res.send("Hello world")
})

app.use('/api', API_ROUTER)

app.listen(port, async ()=>{
    console.log(`Server is running on port ${port}`)
})