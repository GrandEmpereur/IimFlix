import * as dotenv from "dotenv";
import Koa from "koa";
import cors from "@koa/cors";
import ejs from "ejs";
import render from "koa-ejs";
import path from "path";

import pages from "./routes/pages"
import cdeb from "./routes/cdeb"



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

    // get correct root path for vercel deployment
    const root = path.resolve(__dirname, "..")

    // set up ejs
    render(app, {
        root,
        layout: false,
        viewExt: "ejs",
        cache: false,
        debug: false,
    })

    // set up routes
    app.use(pages.routes())
    app.use(cdeb.routes())

    return app
}

main()
