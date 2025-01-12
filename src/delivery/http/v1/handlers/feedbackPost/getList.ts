import { Response } from 'express';
import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';
import { Status } from '@prisma/client';

type Params = Pick<DeliveryParams, 'feedbackPost'>
export type GetList = (req: AuthRequest, res: Response) => Promise<Response>

export const buildGetList = ({ feedbackPost }: Params): GetList => {
  return async (req, res) => {

    const posts = await feedbackPost.list({
      category_name:req.query.category_name as string,
      status:req.query.status as Status,
      sortby:req.query.sort_by as 'date_asc'|'date_desc'|'upvote_asc'|'upvote_desc',
      skip: Number(req.query.skip) ? Number(req.query.skip) : undefined ,
      take: Number(req.query.take) ? Number(req.query.take) : undefined
    });
    
    return res.status(200).json(posts);
  };
}
