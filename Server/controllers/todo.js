const db  = require('../models/todo')

exports.getTodo =  async ctx =>{
    const todoList = await db.find({});
    ctx.body = todoList;
    return todoList;
};

exports.postTodo = async ctx =>{
  console.log("Post Done");
try {
  let todoList = ctx.request.body;
  await db.create({
    task: todoList.task,
    done: todoList.done,
    time: todoList.time,
    favourite: todoList.favourite
  });

  ctx.body = "SUCCESSFULLY ADDED TASK on Mongoose";
  
} catch (error) {
    console.log(error);
    ctx.status = 200;
 }
};