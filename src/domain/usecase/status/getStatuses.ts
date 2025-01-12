import {UseCaseParams} from '@/domain/usecase/types';
import { NotFoundError } from '@/domain/errors';
import { IStatus } from '@/domain/entity/status';

export type GetStatuses = () =>
    Promise<IStatus[] | never>

export const buildGetStatuses = ({adapter}: UseCaseParams): GetStatuses=>{
  return async ()=>{
    const statuses = await adapter.statusRepository.getAll({})
    if (!statuses){
      throw new NotFoundError({
        code: 'STATUSES_NOT_FOUND'
      })
    }

    return statuses
  }
}
