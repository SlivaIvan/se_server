const combineRouters = require('koa-combine-routers');
const index = require('./index/index')
const subscription = require('./subscription/subscription');
const sse= require('../sse/index');

const router = combineRouters(
    index,
    subscription,
    sse
);

module.exports = router;