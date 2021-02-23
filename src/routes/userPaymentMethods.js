import { Router } from 'express'

import { createUserPaymentMethods, 
    getUserPaymentMethods,
    getUserPaymentMethodsById,
    deleteUserPaymentMethods,
    updateUserPaymentMethods } from '../controllers/userPaymentMethods.controller'

const router = Router();
// /api/UserPaymentMethods/
router.post('/', createUserPaymentMethods) 
router.get('/', getUserPaymentMethods)

// /api/UserPaymentMethods/UserPaymentMethodsID
router.get('/:id', getUserPaymentMethodsById )
router.delete('/:id', deleteUserPaymentMethods )
router.put('/:id', updateUserPaymentMethods)

export default router;