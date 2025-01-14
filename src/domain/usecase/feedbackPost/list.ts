import {UseCaseParams} from '@/domain/usecase/types';
import { NotFoundError } from '@/domain/errors';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';
import { Prisma } from '@prisma/client';


export type List = (params:{
  category_name?:string
  status_name?:string
  sortby?:'date_asc'|'date_desc'|'upvote_asc'|'upvote_desc'
  skip?:number
  take?:number
}) => Promise<IFeedbackPost[] | never>


export const buildList = ({adapter}: UseCaseParams): List=>{
  return async ({category_name,status_name,sortby,skip,take})=>{
    const category = await adapter.categoryRepository.get({
      where:{
        name:category_name
      }
    })
    
    const queryParams : Prisma.FeedbackPostFindManyArgs = {
      where:{
        ...(category_name ? {category_id:category.id}:{}),
        ...(status_name && {status_name})
      },
      skip,
      take,
      orderBy:[]
    }

    if (sortby) {
      switch (sortby) {
      case 'date_asc':
        queryParams.orderBy = { created_at: 'asc' }; 
        break;
      case 'date_desc':
        queryParams.orderBy = { created_at: 'desc' };
        break;
      case 'upvote_asc':
        queryParams.orderBy = [
          { Upvote: {_count: 'asc'} },
          { created_at: 'desc' }, 
        ];
        break;
      case 'upvote_desc':
        queryParams.orderBy = [
          { Upvote: {_count: 'desc'} },
          { created_at: 'desc' }, 
        ];
        break;
      }
    }
    const user = await adapter.feedbackPostRepository.list(queryParams)
    if (!user){
      throw new NotFoundError({
        code: 'POST_NOT_FOUND'
      })
    }
    return user
  }
}
