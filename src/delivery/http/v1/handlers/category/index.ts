import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { buildGetList, GetList } from './list';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';
import { buildCreateCategory, CreateCategory } from './create';
import { authRules } from '../auth/rules';

type Params = Pick<DeliveryParams, 'category'>;

export type CategoryMethods = {
  getList: GetList;
  create: CreateCategory
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
    
    namespace.get('/', createRouteHandler(methods.getList));
    /**
 * @openapi
 * /category:
 *   post:
 *     tags:
 *       - category
 *     summary: Create a new category
 *     description: Creates new category by providing a data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *                 description: The name of the category 
 *             required:
 *               - category_name
 *     responses:
 *       201:
 *         description: Successfully created category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the newly created category
 *                 name:
 *                   type: string
 *                   description: The name of the category
 *       400:
 *         description: Invalid input data or missing required fields
 *       500:
 *         description: Server error while creating a category
 */
    namespace.post('/', authRules, createRouteHandler(methods.create));

    root.use('/category', namespace);
  };

export const buildCategoryHandler = (params: Params): IHandler => {
  const getList = buildGetList(params);
  const create = buildCreateCategory(params)
  return { registerRoutes: buildRegisterRoutes(
    { 
      getList,
      create
    }) 
  };
};
 