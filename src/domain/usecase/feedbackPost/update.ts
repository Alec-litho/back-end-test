import { Prisma } from '@prisma/client';
import { UseCaseParams } from '../types';
import { IFeedbackPost } from '@/domain/entity/feedbackPost';
import { ICategory } from '@/domain/entity/category';
import { IStatus } from '@/domain/entity/status';

export type UpdatePost = (data: {
  post_id:string,
  title?:string,
  description?:string,
  category_name?:string
  status_name?:string
}) =>
    Promise<IFeedbackPost | never>

export const buildUpdatePost = ({ adapter }: UseCaseParams): UpdatePost=>{
  return async ({post_id, title, description, category_name, status_name})=>{
    const updatePost:Prisma.FeedbackPostUpdateInput = {}
    let category: ICategory
    let status: IStatus
    if(title) updatePost.title = title
    if(description) updatePost.description = description
    if(status_name){
      status = await adapter.statusRepository.get({
        where:{name:status_name}
      })
    } else {
      status = await adapter.statusRepository.create({
        data:{
          name:status_name!.toLowerCase()
        }
      })
    }
    updatePost.status = { connect: { id: status.id } };


    if(category_name){
      category = await adapter.categoryRepository.get({
        where:{name:category_name}
      })
    } else {
      category = await adapter.categoryRepository.create({
        data:{
          name:category_name!.toLowerCase()
        }
      })
    }
    updatePost.category = { connect: { id: category.id } };
    const post = await adapter.feedbackPostRepository.update({
      where:{ id:post_id },
      data:updatePost
    })

    return post

  }}
