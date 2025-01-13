import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { createRouteHandler } from '../../routeHandler';
import { authorizationRules } from '../auth/rules';
import { IHandler } from '../types';
import { buildGetAll, GetAll } from './getAll';

type Params = Pick<DeliveryParams, 'status'>;
export type StatusMethods = {
  getAll: GetAll,
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

    root.use('/status', namespace);
  }
);

export const buildStatusHandler = (params: Params): IHandler => {
  const getAll = buildGetAll(params);
  return {
    registerRoutes: buildRegisterRoutes({
      getAll
    })
  };
};
