import { AdapterParams } from '@/adapter/types'
import { buildCreate, Create } from './create'
import { buildDelete, Delete } from './delete'
import { buildGet, Get } from './get'
import { buildGetAll, GetAll } from './getAll'

type Params = Pick<AdapterParams, 'db'>

export type CategoryRepository = {
  create: Create,
  deleteCategory:Delete,
  get:Get
  getAll: GetAll
}
export const buildCategoryRepository = (params: Params): CategoryRepository=>{
  const create = buildCreate(params)
  const deleteCategory = buildDelete(params)
  const get = buildGet(params)
  const getAll = buildGetAll(params)

  return {
    create,
    deleteCategory,
    get,
    getAll
  }
}
