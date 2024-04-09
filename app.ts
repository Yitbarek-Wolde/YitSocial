import express from 'express'
import morgan from "morgan"
import { ErrorWithStatus } from './types/custome.error'
import cors from 'cors'
import helmet from 'helmet'
import { ServerError } from './types/server.error'


const app = express()

app.use(helmet())
app.use(cors())

app.use(morgan('dev'))


app.use('/users')//StudentRouter)

app.all('*',(req, res, next ) => { next (new ErrorWithStatus('Route not found', 404)) }, ServerError)//(req, res, next) => { next(new ErrorWithStatus('Route not found', 404)) })


app.listen(3000, () => console.log(`listening to 3000`))