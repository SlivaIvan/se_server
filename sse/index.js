const Router = require('koa-router');
const { streamEvents } = require('http-event-stream');

const router = new Router();

router.get('/sse', async (ctx) => {
streamEvents(ctx.req, ctx.res, {
    async fetch(lastEventId){
        console.log(lastEventId);
        
        return [];
    },

    async stream(sse){
        sse.sendEvent({
            data: 'Привет сервер',
        });

        return () => {};
    }
})

    ctx.respond = false;
})

module.exports = router;