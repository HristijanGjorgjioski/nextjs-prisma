import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/client';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await prisma.post.findMany()
        res.status(200).json(result)
      } catch (err) {
        res.status(403).json({ err: "Error has occured while fetching a posts" })
      }
}
