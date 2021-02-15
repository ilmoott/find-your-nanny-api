import { Router } from 'express'

import { createWallets, 
    getWallets,
    getWalletById,
    deleteWallet,
    updateWallet } from '../controllers/wallet.controller'

const router = Router();
// /api/Wallet/
router.post('/', createWallets) 
router.get('/', getWallets)

// /api/Wallet/WalletID
router.get('/:id', getWalletById )
router.delete('/:id', deleteWallet )
router.put('/:id', updateWallet)

export default router;