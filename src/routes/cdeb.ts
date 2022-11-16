import Router from "koa-router";
import koaBody from "koa-body";

const ROUTER_OPTIONS = {
    prefix: '/cdeb'
};

export default new Router(ROUTER_OPTIONS)
    .get('/', async (ctx) => {
        await ctx.render('cdeb', {
            title: 'CDEB'
        });
    })



// Path: src\routes\index.ts


