// Require third-party modules
const express = require('express');

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

// Get our route file
var postsRouter = require('./routes/posts');
// Tell express to use our posts.js file for /posts routes
app.use('/posts', postsRouter);

// Actually set up the server
app.listen(config.port, function() {
	console.log(`Application started on port: ${config.port}`);
});