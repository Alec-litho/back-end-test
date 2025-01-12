import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { buildGetAll, GetAll } from './getAll';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';


type Params = Pick<DeliveryParams, 'category'>;

export type FeedbackPostMethods = {
  getAll:GetAll,
};

const buildRegisterRoutes = (methods: FeedbackPostMethods) => (
  (root: Express.Router) => {
    const namespace = Express.Router();
    namespace.get('/getAll',createRouteHandler(methods.getAll))
    root.use('/feedbackPostCategory', namespace);
  }
);

export const buildCategoryHandler = (params: Params): IHandler => {
  const getAll = buildGetAll(params)
  return {registerRoutes: buildRegisterRoutes({getAll})};
};
