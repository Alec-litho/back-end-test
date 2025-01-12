import { UseCaseParams } from '@/domain/usecase/types';
import { buildGetAll, GetAll } from '@/adapter/repository/status/getAll';

export type StatusUseCase = {
  getAll: GetAll;
}

export const buildUpvoteUseCase = (params: UseCaseParams): StatusUseCase => {
  const getAll = buildGetAll(params);
  return {
    getAll
  }
}
 