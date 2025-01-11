import { buildExampleGateway, ExampleGateway } from './gateway/example';
import { buildUserRepository, UserRepository } from './repository/user';
import { buildCategoryRepository, CategoryRepository } from './repository/category';
import { buildUpvoteRepository, UpvoteRepository } from './repository/upvote';
import { AdapterParams } from './types';
import { buildFeedbackPostRepository, FeedbackPostRepository } from './repository/feedbackPost'

export type Adapter = {
  userRepository: UserRepository;
  exampleGateway: ExampleGateway;
  feedbackPostRepository: FeedbackPostRepository;
  categoryRepository: CategoryRepository;
  upvoteRepository: UpvoteRepository
}

export const buildAdapter = (params: AdapterParams): Adapter => {
  const userRepository = buildUserRepository(params);
  const exampleGateway = buildExampleGateway(params);
  const feedbackPostRepository = buildFeedbackPostRepository(params);
  const categoryRepository = buildCategoryRepository(params)
  const upvoteRepository = buildUpvoteRepository(params)

  return {
    userRepository,
    exampleGateway,
    upvoteRepository,
    categoryRepository,
    feedbackPostRepository
  }
}
