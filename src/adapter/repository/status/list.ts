import { AdapterParams, UnknownTx } from '@/adapter/types'
import { IStatus } from '@/domain/entity/status'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

export type StatusList = (data: Prisma.StatusFindManyArgs)=>Promise<IStatus[] | never>

export const buildStatusList = ({db}: Params): StatusList=>{
  return async (data)=>{
    return await db.client.status.findMany(data) as IStatus[]
  }
}
