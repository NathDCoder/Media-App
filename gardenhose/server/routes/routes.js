// const { response } = require('express')
const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateForm = require('../models/SignUp')

router.post('signup', (req, res) => {
    const registeredUser = new signUpTemplateForm({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.email
    })
    registeredUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router;