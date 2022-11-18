import Router from "koa-router"
import koaBody from "koa-body"

const ROUTER_OPTIONS = {
    prefix: "/crea",
}

export default new Router(ROUTER_OPTIONS)
    /**
     * @api { POST } / 
     * @apiName 
     * @description 
     * @apiGroup 
     *
     */

    .post("/", koaBody(), async (ctx) => {
        const { code1, code2, code3 } = ctx.request.body
        console.log(code1, code2, code3)
        const responseCode1 = "code1"
        const responseCode2 = "code2"
        const responseCode3 = "code3"


        if (code1 === responseCode1 && code2 === responseCode2 && code3 === responseCode3) {
            // return true
            ctx.body = {
                success: true,
                token: "CDI Success",
            }
            console.log("CDI Success")
        } else {
            ctx.throw(400, "Invalid code")
        }
    })