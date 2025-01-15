import { GetCategoriesList, buildGetCategoriesList } from './list';
import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreateCategory, CreateCategory } from './create';


export type CategoryUseCase = {
  list: GetCategoriesList;
  create: CreateCategory
}

export const buildCategoryUseCase = (params: UseCaseParams): CategoryUseCase => {
  const list = buildGetCategoriesList(params);
  const create = buildCreateCategory(params);

  return {
    list,
    create
  }
}
 