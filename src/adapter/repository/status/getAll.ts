import { AdapterParams, UnknownTx } from '@/adapter/types'
import { IStatus } from '@/domain/entity/status'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

export type GetAll = (data: Prisma.StatusFindFirstArgs, tx?: UnknownTx)=>Promise<IStatus[] | never>

export const buildGetAll = ({db}: Params): GetAll=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).status.findMany(data) as IStatus[]
  }
}
