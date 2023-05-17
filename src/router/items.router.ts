/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as ItemService from '@src/models/items.service';
import { BaseItem, Item } from '@src/models/mongoDB/items.interface';

import ItemController from '@src/controllers/items-controller';


/**
 * Router Definition
 */

export const itemsRouter = express.Router();


/**
 * Controller Definitions
 */

// GET items
// itemsRouter.get("/", async (req: Request, res: Response) => {
//   try {
//     const items: Item[] = await ItemService.findAll();

//     res.status(200).send(items);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });
const con = new ItemController();
itemsRouter.get('/', con.listItems);
itemsRouter.get('/vime', con.vime);

itemsRouter.get('/:id', con.getItem );

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;
    console.log('req.body: ', req.body);

    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
		const itemUpdate: Item = req.body;

		const existingItem: Item = await ItemService.find(id);

		if (existingItem) {
			const updatedItem = await ItemService.update(id, itemUpdate);
			return res.status(200).json(updatedItem);
		}

		const newItem = await ItemService.create(itemUpdate);

		res.status(201).json(newItem);
	} catch (e: any) {
		res.status(500).send(e.message);
	}
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
		const id: number = parseInt(req.params.id, 10);
		await ItemService.remove(id);

		res.sendStatus(204);
	} catch (e: any) {
		res.status(500).send(e.message);
	}
});

