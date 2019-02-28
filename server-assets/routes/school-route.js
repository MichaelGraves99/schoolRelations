let Schools = require('../models/school')
let Classrooms = require('../models/classroom')
let router = require('express').Router()

//GET

router.get('', (req, res, next) => {
    Schools.find({})
        .then(schools => {
            res.status(200).send(schools)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


router.get('/:id', (req, res, next) => {
    Schools.findById(req.params.id).populate('school')
        .then(school => res.send(school))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/:id/classrooms', (req, res, next) => {
    Schools.find({ school: req.params.id }).populate('school')
        .then(students => res.send(students))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


router.post('', (req, res, next) => {
    Schools.create(req.body)
        .then(school => res.send(school))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.put('/:id', (req, res, next) => {
    Schools.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(school => res.send(school))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('/:id', (req, res, next) => {
    Schools.findByIdAndDelete(req.params.id)
        .then(() =>
            res.send('School has been demolished!!!'))
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})



module.exports = router