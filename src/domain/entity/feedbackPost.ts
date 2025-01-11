import { FeedbackPost } from '@prisma/client';

export interface IFeedbackPost extends FeedbackPost {}

/**
 * @openapi
 * components:
 *   entities:
 *      FeedbackPost:
 *          required:
 *            - id
 *            - created_at
 *          properties: 
 *            id:
 *                type: string
 *            title:
 *                type: string
 *            description:
 *                type: string
 *            category:
 *                type: string
 *            category_id
 *                type: string
 *            status
 *                type: string
 *            user
 *                type: string
 *            author_id
 *                type: string
 *            created_at:
 *                type: string
 *                format: date  
 */
