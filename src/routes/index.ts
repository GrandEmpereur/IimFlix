import { Express } from "express"
import { Router } from "express"

export function createRoutes(app: Express): void {
    const router = Router()

    router.get("/", (req, res) => {
        res.render("index.ejs")
    })

    router.get("/about", (req, res) => {
        res.render("about.ejs")
    })


    app.use(router)
}
