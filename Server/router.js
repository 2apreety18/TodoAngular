const Router = require('koa-router');
const router = new Router();
const todoController = require('./controllers/todo');

router.get('/todo',todoController.getTodo);
router.post('/todo',todoController.postTodo);


module.exports = router;