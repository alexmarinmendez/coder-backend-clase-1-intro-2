import { isReverseIntService } from '../services/numbers.service.js'

export const isReverseIntController = (req, res) => {
    const { number1: num1, number2: num2 } = req.body
    const result  = isReverseIntService(+num1, +num2)
    res.status(200).json({ status: 'success', payload: result })
}