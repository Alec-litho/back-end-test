import { AdapterParams, UnknownTx } from '@/adapter/types'
import { ICategory } from '@/domain/entity/category'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

export type Get = (data: Prisma.CategoryFindFirstArgs, tx?: UnknownTx)=>Promise<ICategory | never>

export const buildGet = ({db}: Params): Get=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).category.findFirst(data) as ICategory
  }
}
