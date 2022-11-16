import * as dotenv from "dotenv";
import Koa from "koa";
import cors from "@koa/cors";
import ejs from "ejs";
import render from "koa-ejs";
import path from "path";

dotenv.config({
    path: path.resolve(
        process.cwd(),
        process.env.NODE_ENV === "development" ? ".env.development" : ".env"
    ),
})

async function main(): Promise<void> {
    const app = await createApp()
    const port = process.env.PORT || 4200

    app.listen(port)
    console.log(`Listening on port http://localhost:${port}`)
}

async function createApp(): Promise<Koa> {
    const app = new Koa()
    app.use(cors())

    render(app, {
        root: path.join(__dirname, "views"),
        layout: "layout",
        viewExt: "html",
        cache: false,
        debug: false,
    })

    app.use(async (ctx, next) => {
        await ctx.render("layout", {
            title: "Hello World",
        })
    })

    return app
}

main()
