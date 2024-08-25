import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/services/prisma'
import { Contact } from '@prisma/client';

type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Contact>>
) {
  const userId: number = req.body.userId;
  
  const result = await prisma.user.findFirst({
    select: {
      contacts: true,
    },
    where: {
      id: userId,
    }
  });

  res.status(201).send(result?.contacts!);
}