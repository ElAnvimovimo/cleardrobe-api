import { Router } from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { getAll, create, remove } from '../controllers/clothing.controller.js'

const router = Router()

router.get('/',       protect, getAll)
router.post('/',      protect, create)
router.delete('/:id', protect, remove)

export default router