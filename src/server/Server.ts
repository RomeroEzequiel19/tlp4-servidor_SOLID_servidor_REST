import express, {Application} from "express"
import morgan from "morgan"
import cors from "cors"
import vehicleRouter from "./routes/vehicle.routes"

class Server {
    private app: Application
    public port: string

    constructor() {
        this.app = express()
        this.port = "3001"
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection() {
        console.log("Se conectó a la base de datos")
    }

    middlewares(): void {
        this.app.use(cors())
        this.app.use(morgan("dev"))
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/api/", vehicleRouter)
    }

    listen():void {
        this.app.listen(this.port, () => {
            console.log(`Server running in port http://localhost:${this.port}`)
        })
    }
}

export default Server