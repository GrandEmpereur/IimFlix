import Router from "koa-router";
import koaBody from "koa-body";

const ROUTER_OPTIONS = {
    prefix: '/'
};

export default new Router(ROUTER_OPTIONS)
    .get('/', async (ctx) => {
        await ctx.render('index', {
            title: 'Home'
        });
    })



// Path: src\routes\index.ts


