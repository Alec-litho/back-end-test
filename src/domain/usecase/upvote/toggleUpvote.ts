import {UseCaseParams} from '@/domain/usecase/types';
import { IUpvote } from '@/domain/entity/upvote';

export type ToggleUpvote = (params:{
    id:string
    post_id:string
}) =>
    Promise<IUpvote | never>
export const buildToggleUpvote = ({adapter}: UseCaseParams): ToggleUpvote=>{
  return async ({id,post_id})=>{
    let upvote = await adapter.upvoteRepository.get({
      where:{
        user_id:id,
        feedbackPost_id:post_id
      }
    })

    if (!upvote){
      upvote = await adapter.upvoteRepository.create({
        data: {user_id:id,feedbackPost_id:post_id}
      })
      return {...upvote,message:'Already upvoted'}
    }
    else{
      await adapter.upvoteRepository.deleteUpvote({
        where:{id:upvote.id}
      })
      return {...upvote,message:'Upvote was removed'}
    }
  }
}
