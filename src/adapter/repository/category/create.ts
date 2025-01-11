import { AdapterParams, UnknownTx } from '@/adapter/types'
<<<<<<< HEAD
import { ICategory } from '@/domain/entity/category'
=======
import { IUpvote } from '@/domain/entity/upvote'
>>>>>>> 9d29a20f03b0c42730c661c96d7e5609b316553a
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

<<<<<<< HEAD
export type Create = (data: Prisma.CategoryCreateArgs, tx?: UnknownTx)=>Promise<ICategory | never>

export const buildCreate = ({db}: Params): Create=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).category.create(data) as ICategory
=======
export type Create = (data: Prisma.UpvoteCreateArgs, tx?: UnknownTx)=>Promise<IUpvote | never>

export const buildCreate = ({db}: Params): Create=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).upvote.create(data) as IUpvote
>>>>>>> 9d29a20f03b0c42730c661c96d7e5609b316553a
  }
}
