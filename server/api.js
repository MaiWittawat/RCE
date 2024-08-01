const express = require('express')

// Database API
const userRouter = require('./db_api/users')
const problemRouter = require('./db_api/problems')
const caseRouter = require('./db_api/case')


// Email API
const mailRouter = require('./mail_api/nodemailer')


const router = express.Router()

router.use('/users', userRouter)
router.use('/problems', problemRouter)
router.use('/case', caseRouter)
router.use('/mail',  mailRouter)


// app.post('/compile', (req, res)=>{
//     const {code, language} = req.body
//     const fileExtension = {
//         python: 'py',
//         c: 'c',
//         'c++': 'cpp'
//     }[language]

//     const directory = path.join(__dirname, 'code')
//     if (!fs.existsSync(directory)) {
//         fs.mkdirSync(directory);
//     }

//     const fileName = path.join(directory, `code.${fileExtension}`)
//     fs.writeFileSync(fileName, code)

//     const compileCommands = {
//         python: `python3 ${fileName}`,
//         c: `gcc ${fileName} -o ${directory}/code.out && ${directory}/code.out `,
//         'c++': `g++ ${fileName} -o ${directory}/code.out && ${directory}/code.out`
//     }

//     try{
//         const execCommand = `${compileCommands[language]}`
//         const execResult = execSync(execCommand, {encoding: 'utf8'})
//         console.log(execCommand)
//         console.log(execResult)
//         res.send(execResult.toString())

//     }catch(err){
//         console.error(`error try catch : ${err}`)
//     }

// })


module.exports = router
