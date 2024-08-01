const express = require('express')
const Problem = require('../model/problem')
const jwt = require('jsonwebtoken')
const User = require('../model/user')

const router = express.Router()
const mysecret = "MAIaam1146"

// API ROUTER
router.get('/', async (req, res) => {
    try {
        const problem = await Problem.getProblems()
        res.status(200).json(problem)
    } catch (err) {
        console.error(`Error fetching problems: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const problemId = req.params.id
        const problem = await Problem.getProblemById(problemId)
        if (!problem) {
            return res.status(200).json({ message: "Problem not found" })
        }

        res.status(200).json(problem)

    } catch (err) {
        console.error(`Error fetch problem: ${req.params.id}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.post('/', async (req, res) => {
    try {
        const problem = req.body
        await Problem.createProblem(problem)
        res.status(200).json({ message: "Create problem successfully!!" })
    } catch (err) {
        console.error()
        console.error(`Error created problem: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const authHeader = req.headers['authorization']

        if (!authHeader) {
            return res.status(401).json({ error: "No authorization header provided" });
        }

        const problemId = req.params.id
        const problem = req.body
        const token = authHeader.split(' ')[1]
        const tokenUser = jwt.verify(token, mysecret)
        const userId = problem.created_by

        const isSameUser = await User.compareUser(tokenUser.email, userId)

        if (!isSameUser) {
            return res.status(403).json({ error: "You can only update your own problem" });
        }

        await Problem.updateProblem(problemId, problem)
        res.status(200).json({ message: "Update problem successfully!!" })

    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            console.error(`JWT Error: ${err.message}`)
            res.status(401).json({ error: "Unauthorized: Invalid Token" })
        }
        else {
            console.error(`Error updating problem: ${err}`)
            res.status(500).json({ error: "Internal Server Error" })
        }

    }
})

router.delete('/delete/:problemId', async (req, res) => {
    try {
        const problemId = req.params.problemId
        const problem = await Problem.getProblemById(problemId)

        if (!problem) {
            return res.status(404).json({error: "problem not found."})
        }

        console.log(problem)
        const authHeader = req.headers['authorization']

        if (!authHeader) {
            return res.status(401).json({ error: "No authorization header provided" });
        }

        const userId = problem.created_by
        const token = authHeader.split(' ')[1]
        const tokenUser = jwt.verify(token, mysecret)

        const isSameUser = await User.compareUser(tokenUser.email, userId)

        if (!isSameUser) {
            return res.status(403).json({ error: "You can only delete your own problem" });
        }

        await Problem.deleteProblem(problemId)
        res.status(200).json({ message: "Delete problem successfully!!" })
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            console.error(`JWT Error: ${err.message}`)
            res.status(401).json({ error: "Invalid Token" })
        }
        else {
            console.error(`Error deleted problem: ${err}`)
            res.status(500).json({ error: "Internal Server Error" })
        }
    }
})

router.get('/userProblem/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const problems = await Problem.getProblemByUserId(userId)
        res.status(200).json(problems)
    } catch (err) {
        console.error(`Error get problem by user: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = router

