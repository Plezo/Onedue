import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const list = await prisma.list.findUnique({
                where: {
                    id: String(req.query.id)
                },
                include: {
                    todos: true
                }
            });

            if (list !== null)
                return res.status(200).json(list);
            else
                return res.status(404).send({ error: "List not found" });
        } catch (err: any) {
            return res.status(500).json(err);
        }
    } else if (req.method === 'DELETE') {
        const list = await prisma.list.delete({
            where: {
                id: String(req.query.id)
            }
        });
        return res.status(200).json(list);
    }
}