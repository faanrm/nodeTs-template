import dotenv from 'dotenv'

dotenv.config()
export const PORT = process.env.PORT || 5200
export const MONGO_URL = process.env.MONGO_URL