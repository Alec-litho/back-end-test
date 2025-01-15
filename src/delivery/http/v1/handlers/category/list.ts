import {Response} from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'category'>
export type GetList = (req: Request, res: Response)=>Promise<Response>

export const buildGetList = ({category}: Params): GetList=>{
  return async (req, res)=>{
    const categories = await category.list();
    return res.status(200).json(categories)
  }
}
