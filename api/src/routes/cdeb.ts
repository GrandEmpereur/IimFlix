import Router from "koa-router"
import koaBody from "koa-body"

const ROUTER_OPTIONS = {
    prefix: "/cdeb",
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
        const { code1, code2 } = ctx.request.body
        const codeResponse = "creations"
        const codeResponse2 = "design"

        if (!code1 || !code2) {
            ctx.throw(400, "Missing code1 or code2")
        }

        if (code1 !== codeResponse || code2 !== codeResponse2) {
            ctx.throw(400, "Invalid code")
        }

        if (code1 === codeResponse && code2 === codeResponse2) {
            // return true
            ctx.body = {
                success: true,
                code: "CDEB Success",
            }
        }
    })