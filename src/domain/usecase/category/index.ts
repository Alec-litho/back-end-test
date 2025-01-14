import { GetCategories, buildGetCategories } from './getAll';
import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreateCategory, CreateCategory } from './create';


export type CategoryUseCase = {
  getAll: GetCategories;
  create: CreateCategory
}

export const buildCategoryUseCase = (params: UseCaseParams): CategoryUseCase => {
  const getAll = buildGetCategories(params);
  const create = buildCreateCategory(params);

  return {
    getAll,
    create
  }
}
 