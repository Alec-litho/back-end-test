import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { createRouteHandler } from '../../routeHandler';

import { buildToggleUpvote, ToggleUpvote } from './toggleUpvote';
import { authorizationRules } from '../auth/rules';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'upvote'>;
export type FeedbackPostMethods = {toggleUpvote: ToggleUpvote,};

const buildRegisterRoutes = (methods: FeedbackPostMethods) => (
  (root: Express.Router) => {
    const namespace = Express.Router();
    namespace.get(
      '/toggleUpvote/:post_id',
      authorizationRules,
      createRouteHandler(methods.toggleUpvote)
    );
    root.use('/feedbackPostUpvote', namespace);
  }
);

export const buildFeedbackPostUpvoteHandler = (params: Params): IHandler => {
  const toggleUpvote = buildToggleUpvote(params);
  return {
    registerRoutes: buildRegisterRoutes({toggleUpvote})
  };
};
