let Teachers = require('../models/teacher')
let Classrooms = require('../models/classroom')
let router = require('express').Router()

//GET

router.get('', (req, res, next) => {
    Classrooms.find({})
        .then(classrooms => {
            res.status(200).send(classrooms)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


router.get('/:id', (req, res, next) => {
    Classrooms.findById(req.params.id).populate('school')
        .then(classroom => res.send(classroom))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/:id/teachers', (req, res, next) => {
    Teachers.find({ classroom: req.params.id }).populate('teachers')
        .then(teachers => res.send(teachers))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


router.post('', (req, res, next) => {
    Classrooms.create(req.body)
        .then(classroom => res.send(classroom))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.put('/:id', (req, res, next) => {
    Classrooms.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(classroom => res.send(classroom))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('/:id', (req, res, next) => {
    Classrooms.findByIdAndDelete(req.params.id)
        .then(() =>
            res.send('Classroom has been demolished!!!'))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})



module.exports = router