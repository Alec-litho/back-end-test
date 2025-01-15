import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreateStatus, CreateStatus } from './create';
import { buildGetStatusList, GetStatusList } from './list';

export type StatusUseCase = {
  list: GetStatusList;
  create: CreateStatus
}

export const buildUpvoteUseCase = (params: UseCaseParams): StatusUseCase => {
  const list = buildGetStatusList(params);
  const create = buildCreateStatus(params)
  return {
    list,
    create
  }
}
 