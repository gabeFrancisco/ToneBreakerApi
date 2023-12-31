import http from 'http'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT;
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})