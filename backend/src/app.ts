import express, { urlencoded, type Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { globalErrorHandler } from './middlewares/errorHandler'

export const app: Express = express()


app.use(cors({
  credentials: true,
  origin: env.node_prod === "DEV" ? "*" : env.db_url, //For initial development process
}))

app.use(bodyParser.urlencoded({
  limit: '16kb'
}))
app.use(bodyParser.json({
  limit: '64kb',
}))

import { inventoryRouter } from './routes/inventory.routes'
import { userRouter } from './routes/user.routes'
import { env } from './config/envConfig'

app.use('/api/v1/menu', inventoryRouter);
app.use('/api/v1/user', userRouter);
app.use(globalErrorHandler);


