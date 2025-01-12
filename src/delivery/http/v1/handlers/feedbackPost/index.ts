import { DeliveryParams } from '@/delivery/types';
import Express from 'express';
import { IHandler } from '../types';
import { createRouteHandler } from '../../routeHandler';
import { buildCreatePost, CreatePost } from './create';
import { authorizationRules } from '../auth/rules';
import { buildDeletePost, DeletePost } from './delete';
import { buildUpdatePost, UpdatePost } from './update';
import { buildGetList, GetList } from './getList';
import { buildGetPost, GetPost } from './get';

type Params = Pick<DeliveryParams, 'feedbackPost'>;

export type FeedbackPostMethods = {
  getList:GetList,
  getPost:GetPost,
  createPost:CreatePost,
  deletePost:DeletePost,
  updatePost:UpdatePost
};

const buildRegisterRoutes = (methods: FeedbackPostMethods) => (
  (root: Express.Router) => {
    const namespace = Express.Router();
    namespace.get(
      '/getAll',
      createRouteHandler(methods.getList)
    )
    namespace.get(
      '/getPost/:post_id',
      createRouteHandler(methods.getPost)
    )
    namespace.post(
      '/create',
      authorizationRules,
      createRouteHandler(methods.createPost)
    )
    namespace.patch(
      '/update/:post_id',
      createRouteHandler(methods.updatePost)
    )
  
    root.use('/feedbackPost', namespace);
  }
);

export const buildFeedbackPostHandler = (params: Params): IHandler => {
  const getList = buildGetList(params)
  const getPost = buildGetPost(params)
  const createPost = buildCreatePost(params)
  const deletePost = buildDeletePost(params)
  const updatePost = buildUpdatePost(params)

  return {
    registerRoutes: buildRegisterRoutes({
      getList,
      getPost,
      createPost,
      deletePost,
      updatePost
    })
  };
};
