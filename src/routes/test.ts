import Router from "koa-router";
import koaBody from "koa-body";

const ROUTER_OPTIONS = {
    prefix: '/test'
};

export default new Router(ROUTER_OPTIONS)
    // set up routes for a crud api
    .get('/', async (ctx, next) => {
        ctx.body = 'hello world';
    })


