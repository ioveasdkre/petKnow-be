// src/router.ts

import Route from './routes/route';
import ItemRoute from './routes/items-routes'; 

export const router: Array<Route> = [new ItemRoute()];
