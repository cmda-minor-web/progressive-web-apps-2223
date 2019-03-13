// Require third-party modules
const express = require('express');
const request = require('request');

// Config object
const config = {
	port: 3000
}

// Create new express app in 'app'
const app = express();
// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('public'));

// Create a home route
app.get('/', function(req, res) {
	// Send a plain string using res.send();
	res.send('Hello world');
});

// Create a route for our overview page
app.get('/posts', function(req, res) {
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
app.get('/post/:id', function(req, res) {
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

// Make sure to catch /post to /posts
app.get('/post', function(req, res) {
	// Redirect the client using res.redirect (this will create a new request)
	res.redirect('/posts');
});

// Actually set up the server
app.listen(config.port, function() {
	console.log(`Application started on port: ${config.port}`);
});