import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../prisma/client'

interface postList {
    user_id: string;
    list_name: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.list.findMany();
            return res.status(200).json(data);
        } catch (err: any) {
            return res.status(500).json(err);
        }
    } else if (req.method === 'POST') {

        const list: postList = req.body;

        console.log(list)

        if (list.user_id === "" || list.list_name === "")
            return res.status(500).json("User id and name cant be empty")

        try {
            const data = await prisma.list.create({
                data: {
                    user_id: list.user_id,
                    name: list.list_name,
                }
            });
            return res.status(200).json(data);
        } catch (err: any) {
            return res.status(500).json(err);
        }
    }
}