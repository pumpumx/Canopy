import express, { urlencoded, type Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { globalErrorHandler } from './middlewares/errorHandler'

export const app: Express = express()


app.use(cors({
  credentials: true,
  origin: env.node_prod === "DEV" ? "http://localhost:5173" : env.db_url, //For initial development process
}))

app.use(bodyParser.urlencoded({
  limit: '16kb'
}))
app.use(bodyParser.json({
  limit: '64kb',
}))
app.use(cookieParser())

import { inventoryRouter } from './routes/inventory.routes'
import { userRouter } from './routes/user.routes'
import { env } from './config/envConfig'
import { orderRouter } from './routes/order.routes'
import cookieParser from 'cookie-parser'

app.use('/api/v1/menu', inventoryRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/order', orderRouter)

app.use(globalErrorHandler);

