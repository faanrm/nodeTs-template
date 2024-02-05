import express from "express";
import { PORT } from './config'
import App from  './services/serverApp'

const startServer  = async ()=>{
    const app = express();
    await App (app)

    app.listen(PORT,()=>{
        console.log('Hello world')
    })
}

startServer().then(r=>r);