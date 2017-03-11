var mongoose = require('mongoose');
mongoose.set('debug', true);
var TodoSchema = new mongoose.Schema({
name: String,
completed: Boolean,
updated_at: { type: Date, default: Date.now },
});
//TodoSchema.set('collection', 'todos')
module.exports = mongoose.model('Todo', TodoSchema,"todoarray");
