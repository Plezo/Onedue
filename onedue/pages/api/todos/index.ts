/*
TODO: Change the findMany() to findUnique on the user's id

*/


import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../prisma/client'

interface postTodo {
    list_id?: string;
    user_id: string;
    name: string;
    description?: string;
    due_date?: Date;
    completed?: boolean;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.todo.findMany();
            return res.status(200).json(data);
        } catch (err: any) {
            return res.status(500).json(err);
        }
    } else if (req.method === 'POST') {
        const todo: postTodo = JSON.parse(req.body);

        if (todo.user_id === "" || todo.name === "")
            return res.status(500).json("User id and name cant be empty")

        try {
            const data = await prisma.todo.create({
                data: {
                    list_id: todo.list_id,
                    user_id: todo.user_id,
                    name: todo.name,
                    description: todo.description,
                    due_date: todo.due_date,
                    completed: todo.completed,
                }
            });
            return res.status(200).json(data);
        } catch (err: any) {
            return res.status(500).json(err);
        }
    }
}