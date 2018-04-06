const express = require('express');
const authorController = require('../controller/admin/author/author-controller');

const routes = express.Router();

routes
    .get('/viewAllAuthors', authorController.viewAllAuthors)
    .get('/viewAllAuthorsByName/:authorName', authorController.viewAllAuthorsByName)
    .post('/updateAuthor', authorController.updateAuthor)

module.exports = routes;