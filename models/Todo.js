const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = mongoose.Schema({
    text: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);