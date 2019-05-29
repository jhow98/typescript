import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App{
    public express: express.Application

    constructor(){
        this.express = express()
    }

    private middlewares(): void{
        this.express.use(express.json())
        this.express.use(cors())
    }

    pivate database(): void{
        mongoose.connect('mysql://localhost::3306/tsnode',{
            useNewUrlParser: true
        })
    }

    private routes(): void{
        this.express.get('/', (req, res) =>{
            return res.send('Hello World')
        })
    }

    export default new App().express
}
