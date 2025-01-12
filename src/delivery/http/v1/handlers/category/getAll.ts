import {Response} from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'category'>
export type GetAll = (req: Request, res: Response)=>Promise<Response>

export const buildGetAll = ({category}: Params): GetAll=>{
  return async (req, res)=>{
    const posts = await category.getAll({});
    return res.status(200).json(posts)
  }
}
