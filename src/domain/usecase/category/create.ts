import {UseCaseParams} from '@/domain/usecase/types';
import { ICategory } from '@/domain/entity/category';

export type CreateCategory = (params:{
  category_name: string
}) => Promise<ICategory | never>

export const buildCreateCategory = ({adapter}: UseCaseParams): CreateCategory=>{
  return async ({category_name})=>{
    console.log("category",category_name)
    const category = await adapter.categoryRepository.create({
      data:{
        name:category_name
      }
    })
    return category
  }
}