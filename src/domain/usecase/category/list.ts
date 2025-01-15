import {UseCaseParams} from '@/domain/usecase/types';
import { NotFoundError } from '@/domain/errors';
import { ICategory } from '@/domain/entity/category';

export type GetCategoriesList = () =>
    Promise<ICategory[] | never>

export const buildGetCategoriesList = ({adapter}: UseCaseParams): GetCategoriesList=>{
  return async ()=>{
    const categories = await adapter.categoryRepository.list({})
    if (!categories){
      throw new NotFoundError({
        code: 'CATEGORIES_NOT_FOUND'
      })
    }

    return categories
  }
}
