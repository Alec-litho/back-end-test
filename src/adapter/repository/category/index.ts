import { AdapterParams } from '@/adapter/types'
import { buildCreate, Create } from './create'
import { buildDelete, Delete } from './delete'
import { buildGet, Get } from './get'

type Params = Pick<AdapterParams, 'db'>

export type CategoryRepository = {
  create: Create,
  deleteCategory:Delete,
  get:Get
}
export const buildCategoryRepository = (params: Params): CategoryRepository=>{
  const create = buildCreate(params)
  const deleteCategory = buildDelete(params)
  const get = buildGet(params)

  return {
    create,
    deleteCategory,
    get
  }
}
