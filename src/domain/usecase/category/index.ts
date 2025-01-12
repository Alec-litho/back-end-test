import { GetAll, buildGetAll } from '@/adapter/repository/category/getAll';
import { UseCaseParams } from '@/domain/usecase/types';


export type CategoryUseCase = {
  getAll: GetAll;
}

export const buildCategoryUseCase = (params: UseCaseParams): CategoryUseCase => {
  const getAll = buildGetAll(params);

  return {
    getAll
  }
}
 