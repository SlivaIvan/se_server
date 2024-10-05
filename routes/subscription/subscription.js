const Router = require('koa-router');
const router = new Router();

let subscription = [];
router.post('/subscription', async (ctx) => {
    console.log(ctx.request.body)
    ctx.response.set('Access-Control-Allow-Origin', '*')

    const { name, phone} = JSON.parse(ctx.request.body);
    

    if(subscription.some(el => el.phone === phone)){
        ctx.response.status = 400;
        ctx.response.body = {status: "Такой номер уже есть"}
        return
    }
    subscription.push({name, phone});
    ctx.response.status = 200;
    ctx.response.body = {status: "Номер успешно добавлен"}
})

router.delete('/subscription/', async (ctx) => {
    ctx.response.body = 'delete'
    
    ctx.response.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH')
    const { phone } = ctx.request.query;
    ctx.response.set('Access-Control-Allow-Origin', '*')


    if(subscription.every(el => el.phone !== phone)){
        ctx.response.status = 400;
        ctx.response.body = {status: "Такого номера нет"}
        return;
    }
    subscription = subscription.filter(el => el.phone !== phone);
    ctx.response.status = 200;
    ctx.response.body = { status: "Номер успешно удален" }
})

module.exports = router;