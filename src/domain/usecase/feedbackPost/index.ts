import { UseCaseParams } from '@/domain/usecase/types';
import { CreatePost, buildCreatePost } from './create';
import { GetPost, buildGetPost } from './get';
import { UpdatePost, buildUpdatePost } from './update';
import { List, buildList } from './list';
import { DeletePost, buildDeletePost } from './delete';

export type FeedbackPostUseCase = {
  create: CreatePost;
  getPost: GetPost;
  updatePost: UpdatePost;
  deletePost: DeletePost
  list: List;
}

export const buildFeedbackPostUseCase = (params: UseCaseParams): FeedbackPostUseCase => {
  const create = buildCreatePost(params)
  const list = buildList(params);
  const deletePost = buildDeletePost(params)
  const getPost = buildGetPost(params);
  const updatePost = buildUpdatePost(params)

  return {
    create,
    list,
    deletePost,
    getPost,
    updatePost
  }
}
