import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const data = await prisma.post.findUnique({
                where: {
                    id: Number(req.query.id),
                }
            })
            return res.status(200).json(data)
        } catch (err) {
            res.status(403).json({ err: "Error has occured while fetching a post" })
        }
    }
}
