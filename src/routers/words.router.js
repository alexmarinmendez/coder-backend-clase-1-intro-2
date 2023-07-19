import { Router } from 'express'
import { largestWordController } from '../controllers/words.controller.js'

const router = Router()

router.post('/largest', largestWordController)

export default router