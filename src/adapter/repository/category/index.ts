import { AdapterParams } from '@/adapter/types'
import { buildCreate, Create } from './create'
import { buildDelete, Delete } from './delete'
import { buildGet, Get } from './get'

type Params = Pick<AdapterParams, 'db'>

export type UpvoteRepository = {
  create: Create,
  deleteUpvote:Delete,
  get:Get
}
export const buildUpvoteRepository = (params: Params): UpvoteRepository=>{
  const create = buildCreate(params)
  const deleteUpvote = buildDelete(params)
  const get = buildGet(params)

  return {
    create,
    deleteUpvote,
    get
  }
}
