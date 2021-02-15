import { Router } from 'express'

import { createWalletTransactions, 
    getWalletTransactions,
    getWalletTransactionsById,
    deleteWalletTransactions,
    updateWalletTransactions } from '../controllers/walletTransactions.controller'

const router = Router();
// /api/WalletTransactions/
router.post('/', createWalletTransactions) 
router.get('/', getWalletTransactions)

// /api/WalletTransactions/WalletTransactionsID
router.get('/:id', getWalletTransactionsById )
router.delete('/:id', deleteWalletTransactions )
router.put('/:id', updateWalletTransactions)

export default router;