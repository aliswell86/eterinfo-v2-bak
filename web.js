require('dotenv').config();

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');

const app = new Koa();



mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect('mongodb://my_mean:dlskdud1@ds121321.mlab.com:21321/my_mean').then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

app.set("views", "/home/hosting_users/balkwang/apps/balkwang_eterinfov2/views");

app.use(serve(path.resolve(__dirname, './views/build')));

app.listen(port, () => {
  console.log('listening to port 8002');
});