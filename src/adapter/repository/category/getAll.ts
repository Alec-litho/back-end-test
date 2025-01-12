import { AdapterParams, UnknownTx } from '@/adapter/types'
import { ICategory } from '@/domain/entity/category'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

export type GetAll = (data: Prisma.CategoryFindFirstArgs, tx?: UnknownTx)=>Promise<ICategory[] | never>

export const buildGetAll = ({db}: Params): GetAll=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).category.findMany(data) as ICategory[]
  }
}
