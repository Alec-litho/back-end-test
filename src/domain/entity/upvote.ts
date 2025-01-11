import { Upvote } from '@prisma/client';


export interface IUpvote extends Upvote{
    message?:string
}