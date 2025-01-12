import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { createRouteHandler } from '../../routeHandler';
import { authorizationRules } from '../auth/rules';
import { IHandler } from '../types';
import { buildGetAll, GetAll } from './getAll';

type Params = Pick<DeliveryParams, 'status'>;
export type FeedbackPostMethods = {getAll: GetAll,};

const buildRegisterRoutes = (methods: FeedbackPostMethods) => (
  (root: Express.Router) => {
    const namespace = Express.Router();
    namespace.get(
      '/getAll',
      authorizationRules,
      createRouteHandler(methods.getAll)
    );
    root.use('/upvote', namespace);
  }
);

export const buildFeedbackPostUpvoteHandler = (params: Params): IHandler => {
  const getAll = buildGetAll(params);
  return {
    registerRoutes: buildRegisterRoutes({getAll})
  };
};
