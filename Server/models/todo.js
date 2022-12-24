const connection = require('./index')
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    task: String,
    done: Boolean,
    time: Date,
    favourite: Boolean
});


const Todo = mongoose.model('Todo',todoSchema);

// const todo = new Todo ({
//   task: 'Finish Koa server part for Koa',
//   done: true,
//   time: Date(),
//   favourite: true
// })

module.exports = Todo;