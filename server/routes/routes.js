// const { response } = require('express')
const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateForm = require('../models/SignUp')
const loginFormHandler = require('../models/Login')
const reviews = require('../models/Comment')


router.post('signup', (request, response) => {
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
});

router.post('login', (request, response) => {
    const loggedInUser =  loginFormHandler({    
        username: request.body.username,        
        password: request.body.email
    })
    loggedInUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.get('/', (request, response,) => {
    const userComment = reviews
    userComment.index()
    response.json('INDEX');
});

router.post('/', (request, response) => {
    const userComment = reviews
    userComment.create()
    response.json('CREATE');
});

router.get('/:review_id/edit', (request, response) => {
    const userComment = reviews
    userComment.edit()
    response.json('EDIT');
});

router.put('/;review_id', (request, response) => {
    const userComment = reviews
    userComment.updateReviews()
    response.json('UPDATE');
});

router.delete('/:review_id', (request, response) => {
    const userComment = reviews
    userComment.delete()
    response.json('DELETE');
});



module.exports = router;