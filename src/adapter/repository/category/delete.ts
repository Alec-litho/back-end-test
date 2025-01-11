import { AdapterParams, UnknownTx } from '@/adapter/types'
<<<<<<< HEAD
import { ICategory } from '@/domain/entity/category'
=======
import { IUpvote } from '@/domain/entity/upvote'
>>>>>>> 9d29a20f03b0c42730c661c96d7e5609b316553a
import { Prisma } from '@prisma/client'


type Params = Pick<AdapterParams, 'db'>

<<<<<<< HEAD
export type Delete = (data: Prisma.CategoryDeleteArgs, tx?: UnknownTx)=>Promise<ICategory | never>

export const buildDelete = ({db}: Params): Delete=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).category.delete(data) as ICategory  }
=======
export type Delete = (data: Prisma.UpvoteDeleteArgs, tx?: UnknownTx)=>Promise<IUpvote | never>

export const buildDelete = ({db}: Params): Delete=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).upvote.delete(data) as IUpvote  }
>>>>>>> 9d29a20f03b0c42730c661c96d7e5609b316553a
}
