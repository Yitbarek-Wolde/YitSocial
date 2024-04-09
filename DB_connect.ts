import 'dotenv/config'
//import { ErrorWithStatus } from './types/custome.error'
import mongoose from 'mongoose'

async function Mongo_DB_connect() {
    try {
        if (process.env.Mongo_DB) {
            mongoose.connect(process.env.Mongo_DB)
                .then(_ => console.log('MongoDB connected'))
                .catch(error => console.error(error))
        }
    } catch (error) {

    }

}