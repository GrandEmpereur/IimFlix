import * as dotenv from "dotenv";
import path from "path";
import ejs from "ejs";
import express from "express";

const router = express.Router();
import { Router } from "express";
import { createRoutes } from "./routes/index";

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

async function createApp(): Promise<express.Express> {
    const app = express()

    app.set("views", path.join(__dirname, "views"))
    app.set("view engine", "ejs")
    app.engine("html", ejs.renderFile)

    app.use(express.static(path.join(__dirname, "public")))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))


    // routes
    createRoutes(app)



    return app
}
main()
