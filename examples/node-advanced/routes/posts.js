// We also need express and request here
const express = require('express');
const request = require('request');
// But this time, we only call the router part of express
const router = express.Router();

// Code largely from the simple example, only app. changed into router and '/posts/' stripped from the url

// Create a route for our overview page
router.get('/', function(req, res) {
	request('https://jsonplaceholder.typicode.com/posts', {json: true}, function (err, requestRes, body){
		if (err) {
			// We got an error
			res.send(err);
		} else {
			// Render the page using the 'posts' view and our body data
			res.render('posts', {
				title: 'Posts', // We use this for the page title, see views/partials/head.ejs
				postData: body
			});
		}
	});
});

// Create a route for our detail page
router.get('/:id', function(req, res) {
	request(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {json: true}, function (err, requestRes, body){
		if (err) {
			// We got an error
			res.send(err);
		} else {
			// Render the page using the 'post' view and our body data
			res.render('post', {
				title: `Post ${req.params.id}`, 
				postData: body
			});
		}
	});
});

// Make sure to export the router so it becomes available on imports
module.exports = router;