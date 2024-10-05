const Router = require('koa-router');
const router = new Router();

router.get('/index', async (ctx) => {
    ctx.response.body = 'hello world'
})

module.exports = router;
