var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.set('debug', true);
var Todo = require('../models/Todo.js');

router.post('/create', function(req, res) {
	var temp = new Todo();
	temp.name = req.body.name;
	temp.completed = req.body.completed;
	temp.save(function(err){
		if(err){
			return res.send(err);
		}
	});
	res.json({ message: 'User created!' });
	//Todo.create(req.body, function (err, post) {
		//if (err) return next(err);
		//res.json(post);
		//res.send('done fucker');
	//});
});

router.route('/get')
	.get(function(req, res) {
	console.log('api hit');
	Todo.find({},function(err, todoarray) {
		if (err) {
			return res.json({msg : err});
			console.log('api error');
			}
		// return the users
		console.log('api succes');
		res.json(todoarray);
	});
});

module.exports = router;
