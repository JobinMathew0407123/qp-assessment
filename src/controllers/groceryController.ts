import { Request, Response } from "express";
import groceryService from "../services/groceryService";

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const item = req.body;
    const newItem = await groceryService.addGroceryItem(item);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to add the Grocery item Please check the Data" });
  }
};

export const getGroceryItems = async (_req: Request, res: Response) => {
  try {
    const items = await groceryService.getGroceryItems();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: "Failed to retrieve Grocery Details" });
  }
};

export const removeGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await groceryService.removeGroceryItem(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: "Grocery item of this  ID not found" });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedItem = req.body;
    const item = await groceryService.updateGroceryItem(id, updatedItem);
    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Unable to Update this Item Please check the Data" });
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const item = await groceryService.updateInventory(id, quantity);
    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Unable to Update the Inventory Please check the Data" });
  }
};

export const getAvailableGroceryItems = async (
  _req: Request,
  res: Response
) => {
  try {
    const items = await groceryService.getAvailableGroceryItems();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: "Unable to Fetch the Available items !!!!" });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    await groceryService.placeOrder(order);
    res.sendStatus(204);
  } catch (error) {
    res
      .status(400)
      .json({
        error: "Unable to Place the order now please check after some time",
      });
  }
};
