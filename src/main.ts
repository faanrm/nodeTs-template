import express from "express";
import { PORT } from './config'
import App from  './services/serverApp'
import UserRoutes from "./routes/UserRoutes"
const startServer  = async ()=>{
    const app = express();
    await App (app)
    app.use("/api", UserRoutes)
    app.listen(PORT,()=>{
        console.log('Hello world')
    })
}

startServer().then(r=>r);   