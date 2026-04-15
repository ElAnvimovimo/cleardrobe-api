import { Router } from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { getMonth, assign, remove } from '../controllers/calendar.controller.js'

const router = Router()

router.get('/',         protect, getMonth)  // ?month=YYYY-MM
router.put('/:date',    protect, assign)    // date = "YYYY-MM-DD"
router.delete('/:date', protect, remove)

export default router