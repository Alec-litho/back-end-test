import { buildStatusRepository } from '@/adapter/repository/status';
import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildCategoryUseCase, CategoryUseCase } from './category';
import { buildExampleUseCase, ExampleUseCase } from './example'
import { buildFeedbackPostUseCase, FeedbackPostUseCase } from './feedbackPost';
import { StatusUseCase } from './status';
import { UseCaseParams } from './types';
import { buildUpvoteUseCase, UpvoteUseCase } from './upvote';

export type UseCase = {
  auth: AuthUseCase;
  example: ExampleUseCase;
  feedbackPost: FeedbackPostUseCase;
  category: CategoryUseCase;
  upvote: UpvoteUseCase;
  status: StatusUseCase
}

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const example = buildExampleUseCase(params);
  const feedbackPost = buildFeedbackPostUseCase(params);
  const category = buildCategoryUseCase(params);
  const upvote = buildUpvoteUseCase(params);
  const status = buildStatusRepository(params);

  return {
    auth,
    example,
    feedbackPost,
    category,
    upvote,
    status
  }
}
