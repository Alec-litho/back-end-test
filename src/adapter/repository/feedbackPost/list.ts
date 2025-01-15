import {AdapterParams} from '@/adapter/types';
import {Prisma} from '@prisma/client'
import { IFeedbackPost } from '@/domain/entity/feedbackPost';

type Params = Pick<AdapterParams, 'db'>

export type List = (params:Prisma.FeedbackPostFindManyArgs)=>Promise<Array<IFeedbackPost> | null | never>
export const buildList = ({db}: Params): List =>{
  return async (data )=>{
    const posts = await db.client.feedbackPost.findMany(data) as Array<IFeedbackPost>

    return posts
  }
}
