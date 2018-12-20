require('dotenv').config();

const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');

const app = new Koa();

const {
  PORT: port = 8002, // 값이 존재하지 않는다면 8002을 기본값으로 사용
  MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI).then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

app.set("views", "/home/hosting_users/balkwang/apps/balkwang_eterinfov2/views");

app.use(serve(path.resolve(__dirname, './views/build')));

app.listen(port, () => {
  console.log('listening to port 8002');
});