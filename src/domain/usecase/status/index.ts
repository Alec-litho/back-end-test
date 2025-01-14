import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreateStatus, CreateStatus } from './create';
import { buildGetStatuses, GetStatuses } from './getAll';

export type StatusUseCase = {
  getAll: GetStatuses;
  create: CreateStatus
}

export const buildUpvoteUseCase = (params: UseCaseParams): StatusUseCase => {
  const getAll = buildGetStatuses(params);
  const create = buildCreateStatus(params)
  return {
    getAll,
    create
  }
}
 