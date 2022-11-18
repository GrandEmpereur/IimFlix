import Router from "koa-router"
import { cdebModel } from "../models/cdebModel"
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
        const codeResponse = "Code"
        const codeResponse2 = "Code2"

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
            }
        }
    })