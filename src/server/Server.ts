import express, {Application} from "express"
import morgan from "morgan"
import cors from "cors"
import vehicleRouter from "./routes/vehicle.routes"
import { dbConnect } from "./db/connect.mongo"
import clientRouter from "./routes/client.routes"

class Server {
    private app: Application
    public port: string

    constructor() {
        this.app = express()
        this.port = "4001"
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection() {
        await dbConnect()
    }

    middlewares(): void {
        this.app.use(cors())
        this.app.use(morgan("dev"))
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/api/", vehicleRouter)
        this.app.use("/api/", clientRouter)
    }

    listen():void {
        this.app.listen(this.port, () => {
            console.log(`Server running in port http://localhost:${this.port}`)
        })
    }
}

export default Server