import 'dotenv/config'
//import { ErrorWithStatus } from './types/custome.error'
import mongoose from 'mongoose'

export async function Mongo_DB_connect() {
    try {
        if (process.env.Local_Mon_DB) {
            mongoose.connect(process.env.Local_Mon_DB)
                .then(_ => console.log('MongoDB connected'))
                .catch(error => console.error(error))
        }
    } catch (error) {
        console.log(error)
    }

}