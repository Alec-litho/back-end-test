import { AdapterParams } from '@/adapter/types'
import { buildCreate, Create } from './create'
import { buildDelete, Delete } from './delete'
import { buildGet, Get } from './get'
import { buildGetAll, GetAll } from './getAll'

type Params = Pick<AdapterParams, 'db'>

export type StatusRepository = {
  create: Create,
  deleteStatus:Delete,
  get:Get,
  getAll: GetAll
}
export const buildStatusRepository = (params: Params): StatusRepository=>{
  const create = buildCreate(params)
  const deleteStatus = buildDelete(params)
  const get = buildGet(params)
  const getAll = buildGetAll(params)

  return {
    create,
    deleteStatus,
    get,
    getAll
  }
}
