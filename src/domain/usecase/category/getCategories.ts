import {UseCaseParams} from '@/domain/usecase/types';
import { NotFoundError } from '@/domain/errors';
import { ICategory } from '@/domain/entity/category';

export type GetCategories = () =>
    Promise<ICategory[] | never>

export const buildGetCategories = ({adapter}: UseCaseParams): GetCategories=>{
  return async ()=>{
    const categories = await adapter.categoryRepository.getAll({})
    if (!categories){
      throw new NotFoundError({
        code: 'CATEGORIES_NOT_FOUND'
      })
    }

    return categories
  }
}
