const request = require('request-promise');
const mysql = require('mysql');
const mongodb = require('mongodb');

const viewAllAuthors = function(req, res){
    var authors = [];
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'library'
    })
    conn.query('select * from tbl_author', function(error, authors){
        if(error) throw error;
        // res.send(authors);
        res.render('view-authors',{'authors': authors});
    })
        // request.get('http://localhost:8080/lms/readAuthors', function(error, response, body){
        //     if(error) throw error;
        // }).then(function(body){
        //     res.send(JSON.parse(body));
        // })
}

const viewAllAuthorsByName = function(req, res){
    request.get('http://localhost:8080/lms/readAuthorsByName/'+req.params.authorName, function(error, response, body){
        if(error) throw error;
    }).then(function(body){
        res.send(JSON.parse(body));
    })
}

const updateAuthor = function(req, res){
    console.log(req.body);
    
    // var options = {
    //     uri: 'http://localhost:8080/lms/updateAuthor',
    //     method: 'POST',
    //     json: true
    //   };
    // request(options, function(error, response){
    //     if(error) throw error;
    // }).then(function(body){
    //     res.send('Author added sucessfully');
    // })
    request({
        url: 'http://localhost:8080/lms/updateAuthor',
        method: "POST",
        json: req.body
    }).then(function(body){
            res.send('Author added sucessfully');
    })
}

module.exports = {
    viewAllAuthors,
    viewAllAuthorsByName,
    updateAuthor
}