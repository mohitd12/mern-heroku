const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

// import routes
const routes = require('./routes');

const app = express();

let mongoUrl = [ 'mongodb+srv://' ];

if (config.get('mongodb.user') && config.get('mongodb.password')) {
	mongoUrl.push(config.get('mongodb.user'), ':', config.get('mongodb.password'), '@');
}

mongoUrl.push(config.get('mongodb.host'), '/', config.get('mongodb.dbname'), '?authSource=admin');

// static folders
app.use(express.static(__dirname + '/files'));
app.use(express.static('client/build'));

// routes here
app.use('/api', routes);

// error handler
app.use((err, req, res, next) => {
	res.status(err.status).json(err);
});

// serve client build
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

app.get('*', (req, res) => {
	res.status(404).json({ message: 'URL not found', data: {} });
});

mongoUrl = mongoUrl.join('');

// start server
app.listen(config.get('server.port'), function() {
	mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
		if (err) {
			throw err;
		}

		console.log('Server is listening on port:', config.get('server.port'));
	});
});
