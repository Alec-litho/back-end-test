import { UseCaseParams } from '@/domain/usecase/types';
import { buildToggleUpvote, ToggleUpvote } from './toggleUpvote';


export type UpvoteUseCase = {
  toggleUpvote: ToggleUpvote;
}

export const buildUpvoteUseCase = (params: UseCaseParams): UpvoteUseCase => {
  const toggleUpvote = buildToggleUpvote(params);

  return {
    toggleUpvote
  }
}
 