import { Request, Response } from 'express';
import { Item } from '../models/items.interface';
import * as ItemService from '../services/items.service';

class ItemController {
  async vime(_req: Request, res: Response) {
    let Vimeo = require('vimeo').Vimeo;
    let client = new Vimeo(
      '6ae2aef0e381d6eb06d0a2e2b2e9b47b50452ae4',
      '+HyK0t+nNFj5oRUFsoKvKr6bxVacEgYjYFMU10l+xT7zoCgj8wLPacrHMDE0mHWc2EKvjBhj182Pooa1hHfVst0VJsWOErZXHZhAF6oj2xdC4cYtTaGx6bSxonUrKuLd',
      '5e767da909b9e71b721e49f8bafb023e',
    );

    client.request(
      {
        method: 'GET',
        // path: '/tutorial',
        // path: '/users/user13911393',
        // path: '/videos/807306477',
        path: '/users/13911393/projects',
        // path: '/users/13911393/projects/15430542/videos',
      },
      function (error: any, body: any) {
        if (error) {
          console.log(error);
        }

        console.log(body);
        res.send(body);
      },
    );
  }

  async listItems(_req: Request, res: Response) {
    try {
      const items: Item[] = await ItemService.findAll();
      res.status(200).send(items);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  async getItem(req: Request, res: Response) {
    try {
      const todoId = req.params.id;
      var numId: number = +todoId;
      console.log('req.params.id: ', req.params.id, numId);

      const item: Item = await ItemService.find(numId);
      console.log('item: ', item);

      if (item) {
        return res.status(200).send(item);
      }

      res.status(404).send('item 查詢不到資料');
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
}
export default ItemController;

// alternative way
// export const getItem: RequestHandler<{ id: string }> = (req, res, next) => {
// 	const todoId = req.params.id;
// 	console.log('req.params.id: ', req.params.id);
// 	const updatedText = (req.body as { text: string }).text;

//   const item: Item = items[todoId];
// 	res
// 		.status(201)
// 		.json({
// 			message: 'Item got successfully',
// 			updateTodo: item,
// 		});
// };
