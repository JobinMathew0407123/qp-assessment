import { GroceryItem, GroceryItemModel } from '../models/groceryItem';

class GroceryService {
  // Admin Responsibilities
  async addGroceryItem(item: GroceryItem): Promise<GroceryItem> {
    const newItem = new GroceryItemModel(item);
    return newItem.save();
  }

  async getGroceryItems(): Promise<GroceryItem[]> {
    return GroceryItemModel.find().exec();
  }

  async removeGroceryItem(id: string): Promise<void> {
    await GroceryItemModel.findByIdAndDelete(id).exec();
  }

  async updateGroceryItem(id: string, updatedItem: Partial<GroceryItem>): Promise<GroceryItem | null> {
    return GroceryItemModel.findByIdAndUpdate(id, updatedItem, { new: true }).exec();
  }

  async updateInventory(id: string, quantity: number): Promise<GroceryItem | null> {
    return GroceryItemModel.findByIdAndUpdate(id, { quantity }, { new: true }).exec();
  }

  // User Responsibilities
  async getAvailableGroceryItems(): Promise<GroceryItem[]> {
    return GroceryItemModel.find({ quantity: { $gt: 0 } }).exec();
  }

  async placeOrder(order: GroceryItem[]): Promise<void> {
    const bulkOperations = order.map((item) =>
      GroceryItemModel.updateOne(
        { _id: item._id },
        { $inc: { quantity: -item.quantity } }
      )
    );

    await Promise.all(bulkOperations);
  }
}

export default new GroceryService();