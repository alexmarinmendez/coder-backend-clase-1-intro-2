import { largestWordService } from "../services/words.service.js"

export const largestWordController = (req, res) => {
    const frase = req.body.frase
    console.log(req.body)
    const result = largestWordService(frase)
    res.status(200).json({ status: 'success', payload: result })
}