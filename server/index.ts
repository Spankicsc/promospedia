import express from 'express'
import path from 'path'

const app = express()
const PORT = parseInt(process.env.PORT || '5000', 10)

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const publicDir = path.resolve(__dirname, '../dist/public')

app.use(express.static(publicDir))

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`)
})
