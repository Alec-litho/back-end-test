import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { createRouteHandler } from '../../routeHandler';
import { buildToggleUpvote, ToggleUpvote } from './toggleUpvote';
import { authorizationRules } from '../auth/rules';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'upvote'>;
export type UpvoteMethods = { toggleUpvote: ToggleUpvote };

const buildRegisterRoutes =
  (methods: UpvoteMethods) => (root: Express.Router) => {
    const namespace = Express.Router();

    /**
     * @openapi
     * /upvote/toggle/{post_id}:
     *   get:
     *     summary: Toggle upvote on a feedbackPost
     *     description: Toggles upvote on a feedback post.
     *     tags:
     *       - Upvote on FeedbackPost
     *     parameters:
     *       - in: path
     *         name: post_id
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the feedback post to update.
     *     responses:
     *       200:
     *         description: Successfully toggled upvote for the feedbackPost.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: The user ID.
     *       400:
     *         description: missing required parameters.
     *       500:
     *         description: Internal server error.
     */

    namespace.get('/toggle/:post_id', authorizationRules,createRouteHandler(methods.toggleUpvote));
    root.use('/upvote', namespace);
  };

export const buildUpvoteHandler = (params: Params): IHandler => {
  const toggleUpvote = buildToggleUpvote(params);
  return {
    registerRoutes: buildRegisterRoutes({ toggleUpvote }),
  };
};
