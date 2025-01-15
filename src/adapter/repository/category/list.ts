import { AdapterParams, UnknownTx } from '@/adapter/types'
import { ICategory } from '@/domain/entity/category'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

export type GetList = (data: Prisma.CategoryFindManyArgs)=>Promise<ICategory[] | never>

export const buildGetList = ({db}: Params): GetList=>{
  return async (data)=>{
    return await db.client.category.findMany(data) as ICategory[]
  }
}
