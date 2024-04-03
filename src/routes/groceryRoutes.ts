import express from 'express';
import {
  addGroceryItem,
  getGroceryItems,
  removeGroceryItem,
  updateGroceryItem,
  updateInventory,
  getAvailableGroceryItems,
  placeOrder,
} from '../controllers/groceryController';

const router = express.Router();

// Admin Routes
router.post('/items', addGroceryItem);
router.get('/items', getGroceryItems);
router.delete('/items/:id', removeGroceryItem);
router.put('/items/:id', updateGroceryItem);
router.put('/items/:id/inventory', updateInventory);

// User Routes
router.get('/available', getAvailableGroceryItems);
router.post('/order', placeOrder);

export default router;