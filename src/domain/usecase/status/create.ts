import {UseCaseParams} from '@/domain/usecase/types';
import { IStatus } from '@/domain/entity/status';

export type CreateStatus = (params:{
  status_name: string
}) => Promise<IStatus | never>

export const buildCreateStatus = ({adapter}: UseCaseParams): CreateStatus=>{
  return async ({status_name})=>{
    const status = await adapter.statusRepository.create({
      data:{
        name:status_name
      }
    })
    return status
  }
}