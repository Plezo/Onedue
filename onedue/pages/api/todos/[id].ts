import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const todo = await prisma.todo.findUnique({
                where: {
                    id: String(req.query.id)
                }
            });

            if (todo !== null)
                return res.status(200).json(todo);
            else
                return res.status(404).send({ error: "Todo not found" });
        } catch (err: any) {
            return res.status(500).json(err);
        }
    } else if (req.method === 'DELETE') {
        try {
            const todo = await prisma.todo.delete({
                where: {
                    id: String(req.query.id)
                }
            });
            return res.status(200).json(todo);
        } catch (err: any) {
            return res.status(500).json(err);
        }
    } else if (req.method === 'PATCH') {
        const data = JSON.parse(req.body);

        try {
            const todo = await prisma.todo.update({
                where: {
                    id: String(req.query.id)
                },
                data: data
            });
            return res.status(200).json(todo);
        } catch (err: any) {
            return res.status(500).json(err);
        }
    }
}