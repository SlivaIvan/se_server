const http = require('http');
const Koa = require('koa')
const { koaBody } = require('koa-body');
const router = require('./routes')


const app = new Koa();

app.use(koaBody({
    urlencoded: true,
    multipart: true,
}))

app.use((ctx, next) => {
    if(ctx.method !== 'OPTIONS'){
        next();
        return
    }
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH')
    ctx.response.status = 201;
})

app.use(router())


const server = http.createServer(app.callback());
const PORT = 8000;
server.listen(PORT, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log(`Сервер на порту ${PORT} успешно запущен`)
})