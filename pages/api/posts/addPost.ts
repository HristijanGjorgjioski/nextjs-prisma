import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/client';
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    // if (req.method === 'POST') {
    //     const session = await getServerSession(req, res, authOptions)
    //     if (!session) {
    //       return res
    //         .status(401)
    //         .json({ message: "Please signin to create a post." })
    //     }
    // }

    const { title, content }: { title: string, content: string } = req.body;

    if (title.length > 200) {
        return res.status(403).json({ message: "Please write a shorter title" })
    }

    if (title.length <= 1) {
        return res.status(403).json({ message: "Please write a longer title" })
    }

    try {
        const result = await prisma.post.create({
          data: {
            title,
            content,
            createdAt: new Date
          },
        })
        res.status(200).json(result)
      } catch (err) {
        res.status(403).json({ err: "Error has occured while making a post" })
      }
}
