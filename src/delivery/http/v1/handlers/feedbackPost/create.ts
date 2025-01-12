import {Request, Response} from 'express';
import { DeliveryParams } from '@/delivery/types';
import { Register } from '../auth/register';

type Params = Pick<DeliveryParams, 'feedbackPost'>

export type CreatePost = (req: Request, res: Response)=>Promise<Response>
export const buildCreatePost = ({feedbackPost}: Params): Register=>{
  return async (req, res)=>{
    const data = await feedbackPost.create({
      author_id: req.name?.id,
      title: req.body.title,
      description: req.body.description,
      category_name: req.body.category_name,
      status_name: req.body.status_name
    });

    return res.status(200).json(data);
  }
}
