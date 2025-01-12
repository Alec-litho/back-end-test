import {Response} from 'express';
import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'upvote'>
export type ToggleUpvote = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildToggleUpvote = ({upvote}: Params): ToggleUpvote=>{
  return async (req, res)=>{
    const posts = await upvote.toggleUpvote({
      id:req.user?.id,
      post_id:req.params.post_id
    });
    
    return res.status(200).json(posts)
  }
}
