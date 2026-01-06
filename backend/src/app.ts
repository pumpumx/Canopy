import express, { urlencoded, type Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { globalErrorHandler } from './middlewares/errorHandler'

export const app: Express = express()



app.use(cors({
  credentials: true,
  origin: "*", //For initial development process
}))

app.use(bodyParser.urlencoded({
  limit: '16kb'
}))
app.use(bodyParser.json({
  limit: '64kb',
}))



app.use(globalErrorHandler);


