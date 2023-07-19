import { Router } from 'express'
import { isReverseIntController } from '../controllers/numbers.controller.js'

const router = Router()

router.post('/reverse', isReverseIntController)

export default router