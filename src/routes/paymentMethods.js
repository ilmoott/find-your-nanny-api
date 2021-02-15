import { Router } from 'express'

import { createPaymentMethods, 
    getPaymentMethods,
    getPaymentMethodsById,
    deletePaymentMethods,
    updatePaymentMethods } from '../controllers/paymentMethods.controller'

const router = Router();
// /api/PaymentMethods/
router.post('/', createPaymentMethods) 
router.get('/', getPaymentMethods)

// /api/PaymentMethods/PaymentMethodsID
router.get('/:id', getPaymentMethodsById )
router.delete('/:id', deletePaymentMethods )
router.put('/:id', updatePaymentMethods)

export default router;