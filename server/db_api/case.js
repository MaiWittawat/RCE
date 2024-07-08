const express = require('express')
const Case = require('../model/case')

const router = express.Router()

// API ROUTER
router.get('/', async (req, res) => {
    try {
        const problemCases = await Case.getCase()
        res.status(200).json(problemCases)
    } catch (err) {
        console.error(`Error fetching cases: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.get('/:problem_id/:category', async (req, res) => {
    try {
        const problemId = req.params.problem_id;
        const category = req.params.category;
        const problemCase = await Case.getProblemCase(problemId, category);
        res.status(200).json(problemCase);
    } catch (err) {
        console.error(`Error fetching problem case: ${err}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const caseId = req.params.id
        const problemCase = await Case.getCaseById(caseId)
        if (!problemCase.length) {
            return res.status(404).json({ message: "Case not found" })
        }
        res.status(200).json(problemCase)
        
    } catch (err) {
        console.error(`Error fetch case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.post('/', async (req, res) => {
    try {
        const problemCase = req.body
        await Case.createCase(problemCase)
        res.status(200).json({ message: "Create case successfully!!" })
    } catch (err) {
        console.error()
        console.error(`Error created case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const caseId = req.params.id
        const problemCase = req.body
        await Case.updateCase(caseId, problemCase)
        res.status(201).json({ message: "Update case successfully!!" })
    } catch (err) {
        console.error(`Error updating case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const caseId = req.params.id
        await Case.deleteCase(caseId)
        res.status(200).json({ message: "Delete case successfully!!" })
    } catch (err) {
        console.error(`Error deleted case: ${err}`)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


module.exports = router