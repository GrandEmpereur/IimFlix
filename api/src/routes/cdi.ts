import Router from "koa-router"
import koaBody from "koa-body"

const ROUTER_OPTIONS = {
    prefix: "/cdi",
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
        // get information from the request body
        const { response } = ctx.request.body
        const codeResponse = "Alexis410"

        if (response == codeResponse) {
            // return true
            ctx.body = {
                success: true,
                token: "CDI Success",
            }
        } else {
            ctx.throw(400, "Invalid code")
        }
    })