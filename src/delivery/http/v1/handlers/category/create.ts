import {Request, Response} from 'express';
import { DeliveryParams } from '@/delivery/types';
import { Register } from '../auth/register';

type Params = Pick<DeliveryParams, 'category'>

export type CreateCategory = (req: Request, res: Response)=>Promise<Response>
export const buildCreateCategory = ({category}: Params): Register=>{
  return async (req, res)=>{
    const data = await category.create({
      category_name: req.body.category_name
    });

    return res.status(200).json(data);
  }
}
