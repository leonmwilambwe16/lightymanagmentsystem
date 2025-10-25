import express from 'express'
import cors from 'cors' 
import dotenv from 'dotenv'
import router from './route/Task.route.js'

dotenv.config()

const app = express()
app.use(cors());
app.use(express.json())

app.use('/tasks',router)

const PORT = process.env.PORT || 8600

app.listen(PORT,()=>{
  console.log( `The server is runing on http://localhost:${PORT} `)
})