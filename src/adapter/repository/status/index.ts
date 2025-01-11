import { AdapterParams } from '@/adapter/types'
import { buildCreate, Create } from './create'
import { buildDelete, Delete } from './delete'
import { buildGet, Get } from './get'

type Params = Pick<AdapterParams, 'db'>

export type StatusRepository = {
  create: Create,
  deleteStatus:Delete,
  get:Get
}
export const buildStatusRepository = (params: Params): StatusRepository=>{
  const create = buildCreate(params)
  const deleteStatus = buildDelete(params)
  const get = buildGet(params)

  return {
    create,
    deleteStatus,
    get
  }
}
