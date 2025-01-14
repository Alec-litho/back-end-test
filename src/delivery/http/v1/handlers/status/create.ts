import {Request, Response} from 'express';
import { DeliveryParams } from '@/delivery/types';
import { Register } from '../auth/register';

type Params = Pick<DeliveryParams, 'status'>

export type CreateStatus = (req: Request, res: Response)=>Promise<Response>
export const buildCreateStatus = ({status}: Params): Register=>{
  return async (req, res)=>{
    const data = await status.create({
      status_name: req.body.status_name
    });

    return res.status(200).json(data);
  }
}
