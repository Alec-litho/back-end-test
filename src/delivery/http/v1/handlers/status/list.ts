import {Response} from 'express';
import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'status'>
export type GetAll = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildGetAll = ({status}: Params): GetAll=>{
  return async (req, res)=>{
    const posts = await status.list();
    return res.status(200).json(posts)
  }
}
