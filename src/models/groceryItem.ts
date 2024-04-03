
import mongoose, { Schema, Document } from 'mongoose';

export interface GroceryItem extends Document {
  name: string;
  price: number;
  quantity: number;
}

const groceryItemSchema = new Schema<GroceryItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const GroceryItemModel = mongoose.model<GroceryItem>('GroceryItem', groceryItemSchema);