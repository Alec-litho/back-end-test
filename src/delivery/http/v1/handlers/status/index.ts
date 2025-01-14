import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { createRouteHandler } from '../../routeHandler';
import { authorizationRules } from '../auth/rules';
import { IHandler } from '../types';
import { buildGetAll, GetAll } from './getAll';
import { buildCreateStatus, CreateStatus } from './create';

type Params = Pick<DeliveryParams, 'status'>;
export type StatusMethods = {
  getAll: GetAll,
  create: CreateStatus
};

const buildRegisterRoutes = (methods: StatusMethods) => (
  (root: Express.Router) => {
    const namespace = Express.Router();
    /**
     * @openapi
     * /status:
     *   get:
     *     tags:
     *       - status
     *     summary: Get all statuses
     *     description: This endpoint returns all statuses 
     *     responses:
     *       200:
     *         description: Successfully returned all statuses
     *         content:
     *           application/json:
     *             schema: 
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: The unique identifier of the status (UUID)
     *                   name:
     *                     type: string
     *                     description: The name of the status
     *       500:
     *         description: Server error while returning categories
     *       404:
     *         description: categories not found
     */
    namespace.get('/',authorizationRules,createRouteHandler(methods.getAll));
    /**
 * @openapi
 * /status:
 *   post:
 *     tags:
 *       - status
 *     summary: Create a new status
 *     description: Creates new status by providing a data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_name:
 *                 type: string
 *                 description: The name of the status 
 *             required:
 *               - status_name
 *     responses:
 *       201:
 *         description: Successfully created status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the newly created status
 *                 name:
 *                   type: string
 *                   description: The name of the status
 *       400:
 *         description: Invalid input data or missing required fields
 *       500:
 *         description: Server error while creating the feedback post
 */
    namespace.post('/', authorizationRules, createRouteHandler(methods.create));
    root.use('/status', namespace);
  }
);

export const buildStatusHandler = (params: Params): IHandler => {
  const getAll = buildGetAll(params);
  const create = buildCreateStatus(params);

  return {
    registerRoutes: buildRegisterRoutes({
      getAll,
      create
    })
  };
};
