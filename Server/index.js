const Koa = require('koa');
const app = new Koa();
const port = 3000;
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('koa-cors2');

// app.use((ctx, next) => {
//   next();
//   //Something happens in next and comes back here.

//   if(ctx.status === 404) {
//     //deal with the 404
//   }
// })
  
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(port,()=>{
  console.log(`Server is running on ${port}`);
});