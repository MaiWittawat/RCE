const express = require('express')
const Problem = require('../model/problem')

const router = express.Router()

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
        const problemId = req.params.id
        const problem = req.body
        await Problem.updateProblem(problemId, problem)
        res.status(200).json({ message: "Update problem successfully!!" })
    } catch (err) {
        console.error(`Error updating problem: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const problemId = req.params.id
        await Problem.deleteProblem(problemId)
        res.status(200).json({ message: "Delete problem successfully!!" })
    } catch (err) {
        console.error(`Error deleted problem: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = router

