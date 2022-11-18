import * as dotenv from "dotenv";
import Koa, { Context } from "koa";
import cors from "@koa/cors";
import { connect } from "mongoose";
import path from "path";

import cdeb from "./routes/cdeb";
import cdi from "./routes/cdi";


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

    // DOING: connect to mongodb
    // app.use(async (ctx, next) => {
    //     await connect(`${process.env.MONGODB_SERVER_URL}`)
    //     console.log("Connected to MongoDB" + `${process.env.MONGODB_SERVER_URL}`)
    //     return await next()
    // })

    // @todo routes
    /* app.use(index.routes()) */
    app.use(cdeb.routes())
    app.use(cdi.routes())


    return app
}

main()
