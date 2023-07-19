import express from 'express'
import cors from 'cors'
import wordsRouter from './routers/words.router.js'
import numbersRouter from './routers/numbers.router.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/words', wordsRouter)
app.use('/api/numbers', numbersRouter)

app.listen(8080, () => console.log('Server up!'))