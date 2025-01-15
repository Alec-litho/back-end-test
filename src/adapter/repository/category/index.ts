import { AdapterParams } from '@/adapter/types'
import { buildCreate, Create } from './create'
import { buildDelete, Delete } from './delete'
import { buildGet, Get } from './get'
import { buildGetList, GetList } from './list'

type Params = Pick<AdapterParams, 'db'>

export type CategoryRepository = {
  create: Create,
  deleteCategory:Delete,
  get:Get
  list: GetList
}
export const buildCategoryRepository = (params: Params): CategoryRepository=>{
  const create = buildCreate(params)
  const deleteCategory = buildDelete(params)
  const get = buildGet(params)
  const list = buildGetList(params)

  return {
    create,
    deleteCategory,
    get,
    list
  }
}
