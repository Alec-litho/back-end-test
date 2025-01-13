import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { buildGetAll, GetAll } from './getAll';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'category'>;

export type CategoryMethods = {
  getAll: GetAll;
};

const buildRegisterRoutes =
  (methods: CategoryMethods) => (root: Express.Router) => {
    const namespace = Express.Router();

    /**
     * @openapi
     * /category:
     *   get:
     *     tags:
     *       - category
     *     summary: Get all categories
     *     description: This endpoint returns all categories 
     *     responses:
     *       200:
     *         description: Successfully returned all categories
     *         content:
     *           application/json:
     *             schema: 
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: The unique identifier of the category (UUID)
     *                   name:
     *                     type: string
     *                     description: The name of the category
     *       500:
     *         description: Server error while returning categories
     *       404:
     *         description: categories not found
     */
    
    namespace.get('/', createRouteHandler(methods.getAll));

    root.use('/category', namespace);
  };

export const buildCategoryHandler = (params: Params): IHandler => {
  const getAll = buildGetAll(params);
  return { registerRoutes: buildRegisterRoutes(
    { 
      getAll    
    }) 
  };
};
 