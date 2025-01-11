import { AdapterParams, UnknownTx } from '@/adapter/types'
import { IUpvote } from '@/domain/entity/upvote'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

export type Get = (data: Prisma.UpvoteFindFirstArgs, tx?: UnknownTx)=>Promise<IUpvote | never>

export const buildGet = ({db}: Params): Get=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).upvote.findFirst(data) as IUpvote
  }
}
